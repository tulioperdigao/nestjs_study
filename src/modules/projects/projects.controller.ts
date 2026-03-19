import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { projectRequestDTO } from './projects.dto';

@Controller({
    version: '1',
    path: 'projects',
})
export class ProjectsController {

    constructor(
        private readonly projectsService: ProjectsService
    ) {}

    @Get()
    findAll() {
        return this.projectsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.projectsService.findById(id);
    }

    @Post()
    create(@Body() data: projectRequestDTO) {
        return this.projectsService.create(data);
    }

    @Put(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string, 
        @Body() data: projectRequestDTO,
    ) {
        return this.projectsService.update(id, data)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id:string) {
        return this.projectsService.remove(id)
    }
    
}
