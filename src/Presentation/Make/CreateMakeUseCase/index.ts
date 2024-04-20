import { UploadedFile } from "express-fileupload";
import {
  CreateMakeDbDto,
  CreateMakeDto,
} from "../../../Data/Make/CreateMakeDto";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { FileHandler } from "../../../Utils/FileHandler";
import { AppError } from "../../../ErrorHandler/AppError";
import { DecodeUri } from "../../../Utils/DecodeUri";

export class CreateMakeUseCase {
  private _makeRepository: IMakeRepository;
  private _fileHandler: FileHandler;
  private _decodeUri: DecodeUri;

  constructor(makeRepository: IMakeRepository, fileHandler: FileHandler, private decodeUri: DecodeUri) {
    this._makeRepository = makeRepository;
    this._fileHandler = fileHandler;
    this._decodeUri = decodeUri
  }

  async execute(values: CreateMakeDto[], files: UploadedFile[]) {
    const verifyMakes:string[] = []
    const makesValues = values.map((val) => {
      let makeImage: UploadedFile;
      if (val.imageId) {
        makeImage = files.find(
          (file) => JSON.parse(this._decodeUri.execute(file.name)).id === val.imageId
        );
      }
      return {
        ...val,
        makeImage: makeImage ? makeImage : null,
        makeLogo: makeImage ? this._fileHandler.getFileName(makeImage.mimetype.split("/")[1]) : undefined
      };
    });

    for (const make of makesValues) {
      const checkMake = await this._makeRepository.getByMakeName(make.makeName);

      if (checkMake) {
        verifyMakes.push(make.makeName)
      }
    }

    if(verifyMakes.length > 0){
      throw new AppError(`Following cars already exist ${JSON.stringify(verifyMakes)} please try again`, 400);
    }

    
    const createMakes:CreateMakeDbDto[] = makesValues.map(x=>({
      make_name:x.makeName,
      make_logo: x.makeImage ? x.makeLogo : undefined,
      origin: x.origin,
      active: false
    }))

    await this._makeRepository.create(createMakes)

    for(const makeValue of makesValues){
      if(makeValue.makeImage){
        await this._fileHandler.postFiles(makeValue.makeImage.data, makeValue.makeLogo);
      }
    }

    return true;
  }
}
