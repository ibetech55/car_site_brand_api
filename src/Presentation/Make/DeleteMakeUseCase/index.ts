import { AppError } from "../../../ErrorHandler/AppError";
import { IMakeRepository } from "../../../Repositories/Make/IMakeRepository";

export class DeleteMakeUseCase {
    
    private _repository: IMakeRepository;
    constructor(repository: IMakeRepository) {
        this._repository = repository
    }

    async execute(id: string): Promise<boolean>{
        const make = await this._repository.getById(id) 
        if(!make) {
            throw new AppError('Make does not exist', 400)
        }

        const data = await this._repository.delete(id)
        return data
    }
}