export enum CODE {
  NETWORK_ERROR = 3,
  AUTHORIZATION = 401,

  SERVER_ERROR = 500,
  SUCCESS = 200,
  TOO_MANY = 601,
  USER_UNAUTHORIZED = 401,
  PASSWORD_ERROR = 4101,
  PARAMS_MISSING = 2001,
  EMAIL_EXIST = 4102,
  NOT_LOGIN = 4002,
  TOKEN_BLOCK_LISTED = 2006,
  TOKEN_BLOCK_LISTED_UOSS = 3402,

  S3_FILE_NOT_FOUND = 1002,
  TASK_INITIAL_FAIL = 1003,
  GNERATE_DOWNLOAD_URL_ERROR = 1004,
  LIMIT = 1006,
  NOT_SUPPORT_ENCRYPT = 1009,
  FILE_EXPIRED = 1005,
  SIZE_100M = 1007,
  SIZE_15M = 1008,
  FILE_CONTENT_NULL = 1010,
  FORMAT_ILLEGAL = 1011,
  FILE_TYPE_MISMATCH = 1012,
}

export enum TASK_FAIL_STATUS {
  NOT_SUPPORT_FILETYPE = 1,
  NETWORK_ERROR = 3,
  SERVER_ERROR = 500,
  NORMAL,
  TOO_MANY = 601,
  TIMEOUT, // 网络超时

  GNERATE_DOWNLOAD_URL_ERROR = CODE.GNERATE_DOWNLOAD_URL_ERROR,
  FILE_CONTENT_NULL = CODE.FILE_CONTENT_NULL,
  FORMAT_ILLEGAL = CODE.FORMAT_ILLEGAL,
  FILE_TYPE_MISMATCH = CODE.FILE_TYPE_MISMATCH,
  SIZE_100M = CODE.SIZE_100M,
  SIZE_15M = CODE.SIZE_15M,
  NOT_SUPPORT_ENCRYPT = CODE.NOT_SUPPORT_ENCRYPT,
  LIMIT = CODE.LIMIT,
  FILE_EXPIRE = CODE.FILE_EXPIRED,
}

// 通过重新登录就能解决的错误码
export const LOGIN_TOKEN_CODES: number[] = [
  2005,
  2006,
  2007,
  2008,
  2010,
  2012,
  4002,
  3401,
  3403,
  CODE.TOKEN_BLOCK_LISTED,
  CODE.TOKEN_BLOCK_LISTED_UOSS,
  CODE.USER_UNAUTHORIZED,
];
