import { RoleGuard } from "../role/role.guard"
import { JwtGuard } from "./jwt.guard"
import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { Role } from "./role.decorator"

//o decorator body ira capturar o payload da função de login

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post("login")
  login(@Body() body) {
    return { token: this.authService.login(body.username, body.password) }
  }
  // o decorator @Rec da a instancia da requisição
  @Role("admin")
  @UseGuards(JwtGuard, RoleGuard)
  @Get("test-auth")
  test(@Req() req) {
    console.log(req.user)
    return {
      name: "Luiz Carlos",
    }
  }
}
