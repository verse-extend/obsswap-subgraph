import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(6)

    // Add USDT
    let tokenDGD = new TokenDefinition(
      Address.fromString('0x36AA81a7aEeAB8f09e154d3E779Bb81beA54501A'),
      'USDT',
      'Thter USDT',
      BigInt.fromI32(9)
    )
    staticDefinitions.push(tokenDGD)

    // Add TOKEN
    let tokenAAVE = new TokenDefinition(
      Address.fromString('0xcF259Bca0315C6D32e877793B6a10e97e7647FdE'),
      'TOKEN',
      'Token',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenAAVE)

    

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}