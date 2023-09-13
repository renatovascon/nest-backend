import { Injectable } from "@nestjs/common"
import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt, Strategy } from "passport-jwt"
//serviço que tera a estrategia para garantir quem esteja credenciado continue na aplicação
@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, "jwt") {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "abcd123456",
    })
  }

  async validate(payload) {
    return payload
  }
}
