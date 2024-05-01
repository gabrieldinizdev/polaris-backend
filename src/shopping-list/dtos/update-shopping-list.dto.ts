import { PartialType } from '@nestjs/swagger';

import { CreateShoppingListDTO } from './create-shopping-list.dto';

export class UpdateShoppingListDTO extends PartialType(CreateShoppingListDTO) {}
