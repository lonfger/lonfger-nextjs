export const TIPS_TEXT = {
  password_empty: 'Please input your password!',
  password_not_match:
    'Your password must be at least 6 characters, and contain any combination of letters and digits.',
  password_not_correct: 'Incorrect password.',
  password_not_same:
    'Your password and confirmation password do not match. Try again.',
  passwod_fail_reset: 'Failed to reset password. Try again.',

  email_not_exist: 'The user account does not exist.',
  email_exist: 'This account already exists.',
  email_empty: 'Please input your E-mail!',
  email_not_match: 'Please enter correct email address.',
  email_not_correct: 'Please enter correct email address.',
  email_fail_send: 'Failed to send email. Please try again later.',
  email_send_forget_success:
    'We have sent a password reset link to your email address. Please click the link to create a new password.',
  email_send_code_success:
    'A verification link has been sent to your email address.',
  email_send_too_many: 'Too many attempts. Please try again later.',

  nickname_not_match:
    'Your nickname cannot contain special characters. Please try again.',
  nickname_empty: 'Please enter your nickname.',
  nickname_over_max_length:
    'Your nickname cannot be longer than 50 characters.',
  nickname_edit_success: 'Nickname successfully changed.',
  nickname_edit_fail: 'Failed to change your nickname. Please try again.',

  verify_code_empty: 'Please input your verify code!',
  verify_code_not_match: 'Please enter the 6-digit verification code.',
  verify_code_send_many: 'Too many attempts. Please try again later.',
  verify_code_send_fail: 'Failed to send the code. ',
  verify_code_send_success: 'Success to send the code. ',
  verify_code_not_correct: 'Incorrect verification code. Please try again.',
  verify_code_expired:
    'This account already exists or the verification code has expired.',
  verify_code_wrong:
    'This account already exists or the verification code is incorrect.',
  // verify_code_expired:
  //   'The verification code has expired. Please re-send verification code to try again.',

  empty_file: 'Sorry, unable to convert the file. This file is empty.',

  expired_file: 'This file has expired and was deleted.',
  not_support_fileType:
    'Sorry, unable to convert the file. This file type is not supported yet.',
  not_support_encrypt:
    'Sorry, unable to convert this file because it is password-protected.',
  size_100M:
    'File size exceeds the maximum size (100 MB). If you want to convert this file, please ',
  size_15M: `Please subscribe to EaseUS PDF Online to convert file over 15 MB.`,
  convert_default_fail:
    'Sorry, conversion failed. Please try again in a few minutes or ',

  // 网络出错、其他不需要单独处理的业务报错
  network_error:
    'Sorry, a server error occurred. Please refresh this page and try again.',
  server_error:
    'Sorry, a server error occurred. Please contact customer service.',
  convert_system_fail:
    'Sorry, conversion failed. Please try again in a few minutes or contact us.',
  // 不能下载
  can_not_download: 'Sorry, cannot download this file. Please ',
  re_convert: 'Sorry, your file is invalid. Please convert it again.',
  over_times: `The free plan only converts 2 files per day. Please subscribe to EaseUS PDF Online for unlimited conversions. `,
  pay_fail:
    'Sorry, your purchase could not be completed. Please contact customer service.',
  token_expired: 'Sorry, your session has expired. Please log in again.',
  logout_tips: 'The current task is interrupted.',
  no_network: '网络断开，请检查网络是否连接',

  user_not_login:
    'You are not logged in your account. Please log in and try again.',
  too_many: 'Too many attempts. Please try again later.',
  open_waitting: 'Loading, please wait...',
};

const {
  convert_system_fail,
  not_support_encrypt,
  not_support_fileType,
  size_100M,
  size_15M,
  server_error,
  network_error,
  password_not_correct,
  email_not_exist,
  verify_code_not_correct,
  email_exist,
  verify_code_expired,
  can_not_download,
  re_convert,
  over_times,
  empty_file,
  pay_fail,
  user_not_login,
  token_expired,
  too_many,
} = TIPS_TEXT;

export const SYSTEM_TIPS: {
  [prop: number]: string | ((value: number) => string);
} = {
  3: network_error,
  401: token_expired,
  500: server_error,
  601: too_many,
  1001: not_support_fileType,
  1011: not_support_fileType,
  1012: not_support_fileType,

  1004: can_not_download,
  1005: re_convert,
  1006: over_times,
  1007: size_100M,
  1008: size_15M,
  1009: not_support_encrypt,
  1010: empty_file,
  3503: verify_code_not_correct,
  3501: verify_code_expired,

  4002: user_not_login,
  2008: email_not_exist, // 用户不存在
  4100: email_not_exist,
  4101: password_not_correct,
  4102: email_exist,

  5003: pay_fail,
  5004: pay_fail,
  5005: pay_fail,
  5006: pay_fail,
  5007: pay_fail,
};
// export const SYSTEM_TIPS: { [prop: number]: string } = {
//   999: convert_system_fail,
//   1001: not_support_fileType,
//   1002: convert_system_fail,
//   1003: convert_system_fail,
//   1004: convert_system_fail,
//   1005: expired_file,
//   1007: size_100M,
//   1008: size_15M,
//   1009: not_support_encrypt,
//   1010: not_support_fileType,
//   1011: not_support_fileType,
//   1012: not_support_fileType,
//   2001: not_support_fileType,
//   2002: not_support_fileType,
//   2003: not_support_fileType,
//   // 2004: server_error,
//   // 2009: server_error,
//   // 2011: server_error,
//   3001: not_support_fileType,
//   // 3002: server_error,
//   3003: convert_system_fail,
//   3004: convert_system_fail,
//   3005: convert_system_fail,
//   3006: convert_system_fail,
//   // 3007: server_error,
//   3008: convert_system_fail,
//   3009: convert_system_fail,
//   // 3010: server_error,
//   3011: convert_system_fail,
//   3501: verify_code_expired,
//   3503: verify_code_not_correct,
//   // 4001: server_error,
//   4100: email_not_exist,
//   4101: password_not_correct,
//   4102: email_exist,

//   // 4003: server_error,
//   // 5001: server_error,
//   // 5002: server_error,
// };
