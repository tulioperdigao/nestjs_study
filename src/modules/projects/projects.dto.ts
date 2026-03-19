import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class projectRequestDTO {

    @ApiProperty({description: 'Project Name'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: 'Project Description', required: false})
    @IsString()
    description: string;
}