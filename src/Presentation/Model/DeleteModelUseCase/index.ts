import { AppError } from "../../../ErrorHandler/AppError";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";
import { IModelRepository } from "../../../Repositories/Model/IModelRepository";

export class DeleteModelUseCase {
    
    private _repository: IModelRepository;
    constructor(repository: IModelRepository) {
        this._repository = repository
    }

    async execute(id: string): Promise<boolean>{
        const make = await this._repository.getById(id) 
        if(!make) {
            throw new AppError('Model does not exist', 400)
        }

        const data = await this._repository.delete(id)
        return data
    }
}