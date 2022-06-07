import * as iam from '@aws-cdk/aws-iam';
import * as core from '@aws-cdk/core';

export class SakthiUser extends iam.User {
  /**
   * An attribute that represents the user access_key.
   *
   * @attribute true
   */
  readonly accessKey: string;
  /**
    * An attribute that represents the user secret_key.
    *
    * @attribute true
    */
  readonly secretKey: string;

  constructor(scope: core.Construct, id: string, props?: iam.UserProps) {
    super(scope, id, props);

    let access_key = new iam.CfnAccessKey(scope, `${id}AccessKeys`, {
      userName: this.userName,
    });
    let secret_key = core.Fn.getAtt(access_key.logicalId, 'SecretAccessKey');

    this.accessKey = access_key.ref;
    this.secretKey = secret_key.toString();
  }
}