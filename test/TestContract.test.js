const TestContract = require('../build/TestContract.json')
const { MockProvider, deployContract } = require('ethereum-waffle')

describe('TestContract', () => {
  const [wallet, otherWallet] = new MockProvider().getWallets();

  it('method', async () => {
    const contract = await deployContract(wallet, TestContract);
    await contract.connect(otherWallet).other()
  })
})
