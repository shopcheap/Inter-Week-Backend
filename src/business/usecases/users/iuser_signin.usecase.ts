import { UserSigninDTO } from "@business/dtos/users/user_signin.dto";
import { UserSignReturn } from "@business/dtos/users/user_sign_return.dto";
import { User } from "@business/entities/user";
import { BaseError } from "@business/errors/base_error";
import { Either } from "@shared/utils/either";

export interface IUserSigninUsecase {
  signin(user: UserSigninDTO): Promise<Either<BaseError, UserSignReturn>>
}