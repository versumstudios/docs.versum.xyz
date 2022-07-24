---
icon: chevron-right
label: Advanced swaps
order: 443
---

## What is an Advanced Swap?

An advanced swap allows you to create a price for your token that increases step-by-step with each purchase. Buyers are incentivised to buy the token as early as possible to take advantage of a lower price. 

For example you could list 10 tokens between 1 and 20 tezos, with the price increasing by 2 tezos with each sale. If each is bought, the cost to the buyer will be:

* token 1: 2 tezos
* token 2: 4 tezos
* token 3: 6 tezos
* ...
* token 10: 20 tezos

## How do I calculate what my prices should be?

The most important things to know are:
* `n` - the number of tokens to sell
* `s` - the start price
* `p` - how much the price increments with each sale

You can then calcualate the information you need to set up the advanced swap in Versum using this formula:

* End price = `s + ((n - 1) * p)`

Using the example above, the end price is confirmed:

* End price = `2 + ((10 - 1) * 2) = 20`

The information to input into Versum when setting up the swap will therefore be:

* Quantity: `10`
* Start price: `2` tezos
* End price: `20` tezos

## How do I list my tokens using an incrementing sales price?

You can sell tokens you have minted or tokens you have bought from other creators with an incrementing price. This is done using Versum's Advanced Swap sales listing. 

!!!
You need at least 2 tokens to be able to sell using Advanced Swap
!!!

When logged into Versum, navigate to the token you want to sell from your profile, then: 

1. Navigate to the token's Market tab
2. Click "Create Swap"
3. Select "Advanced Swap" tab
4. Enter the quantity of tokens to sell
5. Select the currency ("Tezos")
6. Enter the start price
7. Enter the end price
8. Click Confirm
9. Confirm the swap in your Wallet

## How do I see what tokens I have listed for sale using Advanced Swap?

Access your [Dashboard](https://versum.xyz/dashboard/swaps) to see all your active swaps.


## How do I cancel the sales listing?

You can cancel an individual Advanced Swap on the Market tab for the token in question. You can also cancel multiple swaps at the same time from your [Dashboard](https://versum.xyz/dashboard/swaps). 

1. Navigate to your dashboard
2. Check all the boxes against the token(s) you wish to cancel the sales listings for
3. Click "Cancel Selected" button at the bottom of the table
4. Confirm the cancellation in your Wallet


## How do I change the pricing for my Advanced Swap sales listing?

In order to amernd the price of a swap, you will have to cancel the sales listing and create a new swap. You will need to take into account how many tokens you have left if you want to create a replacement Advanced Swap

## Slippage

Advanced swaps have a moving price that changes as users buy new editions. Occasionally, when someone buys the piece before you and completes their transaction while yours is still in the mempool, the price will no longer be valid and your transaction will fail.

By adjusting the slippage you are sending a slightly higher value than the asking price, in order to complete your transaction regardless of existing orders in the mempool. If you overpay, the excess will be returned to your wallet when the transaction completes.
