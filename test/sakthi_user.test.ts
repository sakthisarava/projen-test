import { expect, haveResource } from '@aws-cdk/assert';
import { Stack } from '@aws-cdk/core';
import { SakthiUser } from '../src/index';

describe('User', () => {
  it('creates the user', () => {
    const stack = new Stack();
    new SakthiUser(stack, 'User', {
      userName: 'sakthisarava',
    });
    expect(stack).to(haveResource('AWS::IAM::User', {
      userName: 'sakthisarava',
    }));
  });
});