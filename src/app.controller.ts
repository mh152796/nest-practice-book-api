import { Controller, Get } from '@nestjs/common';
import { BookService } from './app.service';
import {Book} from './FakeDatabase';


@Controller('book')
export class BookController {
  constructor(private readonly appService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.appService.getAllBooks();
  }
}
