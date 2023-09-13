import { SetMetadata } from "@nestjs/common"

export const Role = (role: string) => {
  return SetMetadata("role", role)
}

//com o SetMetadata iremos armazenar a informação na memoria e vai ser facil recuperar essa informação
