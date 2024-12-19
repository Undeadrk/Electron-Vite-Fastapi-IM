export class UserInfo {
  accountId: number | null = null;
  username: string | null = null;
  password: string;
  email: string;
  telephone: string;
  avatar: ImageBitmap | null = null; // 如果 avatar 可能未初始化，则设置为 null

  constructor(
      password: string,
      email: string,
      telephone: string,
      avatar?: ImageBitmap // 可以选择性传入 avatar
  ) {
      this.password = password;
      this.email = email;
      this.telephone = telephone;
      if (avatar) {
          this.avatar = avatar;
      }
  }
}
