import { Injectable } from '@nestjs/common';
import { projectRequestDTO } from './projects.dto';

@Injectable()
export class ProjectsService {
    findAll() {
        return ['teste1', 'teste2']
    }

    findById(id: string) {
        return 'teste1'
    }

    create(data: projectRequestDTO) {
        return 'create teste1'
    }

    update(id: string, data: projectRequestDTO) {
        return 'update teste1'
    }

    remove(id: string) {
        return 'remove teste1'
    }
}
