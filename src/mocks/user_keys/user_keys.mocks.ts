import { IUserKeysRepository } from "@app/interfaces/iuser_keys.repository";
import { UserKeysCreationDTO } from "@business/dtos/user_keys/user_keys_creation.dto";
import { UserKeys } from "@business/entities/user_keys";
import { BaseError } from "@business/errors/base_error";
import { Either } from "@shared/utils/either";
import { userSpy } from "mocks/users/users.mocks";

export const userKeysCreateDTOSpy: UserKeysCreationDTO = {
  user: userSpy,
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA++2KwSbND2qjSqGE54DR
  H5Tm2ltTZGNBdnqQ48V8jiYz4iQMe0ZfFOmeT3zK5zs1xSeQ5qKzmVzQhVE0a2tf
  AhQZz2riQoTQkl682kdPJPqrixgugRwB3c6aXCJt/+hwhMuJFYttLVO9OCC8Sj4e
  FVokuuvQOeMh2bLNpPppQ6JqRRK/uDALJteZR/8HSMUwxZa7V2ZS++QNKMYlSrII
  0P269wlpfTUmASSfaDqjm47WT352kfttW8jyM7axe994bixzMigp7LYQ2W6jtmIk
  VuiCUIbCEMwfij9S7363+apwSnsHvZNK+2KglzvzdlTcWzFj5yo4IJN3v4IYspN7
  X7igz+sthT8dI51oYhGzVo1oZrUkjKtWEZo0e8artPHPAYgs9LwBaxIshm5XSVoe
  5WssA4pGRRxOAbYgL38FmycklLCWSD92rTep3J621Www1IzWlHegdOhMiHeWd8ud
  rAErmZpsYH463/lf/6ISzspkxqX+X0sB5at5G4PR95Igl/e7b9eGyoCeq4+PMoPI
  tZXOpGbAhtTQNwRRx0ap7EP0FMPQ7iUmLXS/U+zwiwRFP3jDnNEI70wvXZhPN15g
  s/4KNwndT0lTHxghbvycIJvj0g4gRanb8/2Nl0+O3D3NMuGp4ZMO1X4l9VyAKdh0
  YVbKRQVJUJpQ1FBvooaZfCcCAwEAAQ==
  -----END PUBLIC KEY-----
  `,
  privateKey: `-----BEGIN PRIVATE KEY-----
  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
  YPE2jrNi+6WUxLK2n1M2Kd6uukGYOg==
  -----END PRIVATE KEY-----
  `
};

export const userKeysSpy: UserKeys = {
  id: '650db259-7f16-4283-a64a-57e87fa65165',
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA++2KwSbND2qjSqGE54DR
  H5Tm2ltTZGNBdnqQ48V8jiYz4iQMe0ZfFOmeT3zK5zs1xSeQ5qKzmVzQhVE0a2tf
  AhQZz2riQoTQkl682kdPJPqrixgugRwB3c6aXCJt/+hwhMuJFYttLVO9OCC8Sj4e
  FVokuuvQOeMh2bLNpPppQ6JqRRK/uDALJteZR/8HSMUwxZa7V2ZS++QNKMYlSrII
  0P269wlpfTUmASSfaDqjm47WT352kfttW8jyM7axe994bixzMigp7LYQ2W6jtmIk
  VuiCUIbCEMwfij9S7363+apwSnsHvZNK+2KglzvzdlTcWzFj5yo4IJN3v4IYspN7
  X7igz+sthT8dI51oYhGzVo1oZrUkjKtWEZo0e8artPHPAYgs9LwBaxIshm5XSVoe
  5WssA4pGRRxOAbYgL38FmycklLCWSD92rTep3J621Www1IzWlHegdOhMiHeWd8ud
  rAErmZpsYH463/lf/6ISzspkxqX+X0sB5at5G4PR95Igl/e7b9eGyoCeq4+PMoPI
  tZXOpGbAhtTQNwRRx0ap7EP0FMPQ7iUmLXS/U+zwiwRFP3jDnNEI70wvXZhPN15g
  s/4KNwndT0lTHxghbvycIJvj0g4gRanb8/2Nl0+O3D3NMuGp4ZMO1X4l9VyAKdh0
  YVbKRQVJUJpQ1FBvooaZfCcCAwEAAQ==
  -----END PUBLIC KEY-----
  `,
  privateKey: `-----BEGIN PRIVATE KEY-----
  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
  YPE2jrNi+6WUxLK2n1M2Kd6uukGYOg==
  -----END PRIVATE KEY-----
  `,
  user: userSpy
};

export const userKeysRepositorySpy: IUserKeysRepository = {
  createUserKeys: (userKeysDTO: UserKeysCreationDTO): Promise<Either<BaseError, UserKeys | undefined>> => jest.fn as any,
  getUserKeysByUserId: (userId: string): Promise<Either<BaseError, UserKeys | undefined>> => jest.fn as any,
  updateUserKeys: (id: string, userKeysDTO: UserKeysCreationDTO): Promise<Either<BaseError, UserKeys | undefined>> => jest.fn as any,
};