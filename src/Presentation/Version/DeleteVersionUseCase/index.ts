import { AppError } from "../../../ErrorHandler/AppError";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class DeleteVersionUseCase {
    
    private _repository: IVersionRepository;
    constructor(repository: IVersionRepository) {
        this._repository = repository
    }

    async execute(id: string): Promise<boolean>{
        const model = await this._repository.getById(id) 
        if(!model) {
            throw new AppError('Version does not exist', 400)
        }

        const data = await this._repository.delete(id)
        return data
    }
}