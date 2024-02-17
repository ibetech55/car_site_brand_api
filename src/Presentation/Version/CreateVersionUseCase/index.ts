import { CreateVersionDto, GetCreatedVersionDto } from "../../../Data/Version/CreateVersionDto";
import { IVersionRepository } from "../../../Repositories/Version/IVersionRepository";

export class CreateVersionUseCase {

    private _repository: IVersionRepository;
    constructor(repository: IVersionRepository) {
        this._repository = repository
    }

    async execute(values:CreateVersionDto) {
        const data = this._repository.create({
            version_name: values.versionName,
            model_id: values.modelId,
            active: false,
            description: values.description
        })

        return data;
    }
}