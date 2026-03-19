import { ApiProperty } from "@nestjs/swagger";

export class projectRequestDTO {

    @ApiProperty({description: 'Project Name'})
    name: string;

    @ApiProperty({description: 'Project Description', required: false})
    description: string;
}