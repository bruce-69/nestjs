import { createParamDecorator, ExecutionContext } from "@nestjs/common";

createParamDecorator((_, ctx: ExecutionContext ) =>  {
const requst = ctx.switchToHttp().getRequest();
const user = requst.user;

delete user.password;

return user;

})