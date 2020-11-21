<template>
    <div class="mb-5 prices">
        <div class="actions-toolbar py-2 mb-4 text-center">
            <h5 class="h2 mb-1">Cryptocurrency Prices</h5>
            <p class="text-sm text-muted mb-0">Price rates of prominent cryptocurrencies and digital assets</p>
        </div>
        <div class="table-responsive">
            <table class="table table-cards align-items-center">
                <thead>
                    <tr>
                        <th scope="col">Asset</th>
                        <th scope="col">Price</th>
                        <th scope="col">24h %change</th>
                        <th scope="col">Market Cap</th>
                        <th scope="col">Trade</th>
                    </tr>
                </thead>
                <tbody class="list">
                    <tr>
                        <th scope="row">
                            <div class="media align-items-center">
                                <div>
                                <img alt="BTC digital asset" src="~/assets/images/cryptos/btc.png" class="crypto rounded-circle">
                                </div>
                                <div class="media-body ml-4">
                                <span class="name mb-0 text-sm">Bitcoin</span>
                                </div>
                            </div>
                        </th>
                        <td class="budget">
                            $18500 USD
                        </td>
                        <td>
                            <span class="d-sm-block pl-2">
                                2.5% <small class="fas fa-angle-up text-success"></small>
                            </span>
                        </td>
                        <td>
                            $45,750,000 USD
                        </td>
                    
                        <td class="text-righ">
                            <div class="actions">
                                <button type="button" class="btn buy hover-translate-y-n3"> Buy </button>
                                <button type="button" class="btn sell hover-translate-y-n3"> Sell </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="table-divider"></tr>
                    <tr>
                        <th scope="row">
                            <div class="media align-items-center">
                                <div>
                                <img alt="ETH digital asset" src="~/assets/images/cryptos/eth.png" class="crypto rounded-circle">
                                </div>
                                <div class="media-body ml-4">
                                <span class="name mb-0 text-sm">Ethereum</span>
                                </div>
                            </div>
                        </th>
                        <td class="budget">
                            $49,500 USD
                        </td>
                        <td>
                            <span class="d-sm-block pl-2">
                                7.5% <small class="fas fa-angle-down text-danger"></small>
                            </span>
                        </td>
                        <td>
                            $13,500,000 USD
                        </td>
                    
                        <td class="text-righ">
                            <div class="actions">
                                <button type="button" class="btn buy hover-translate-y-n3"> Buy </button>
                                <button type="button" class="btn sell hover-translate-y-n3"> Sell </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
	.prices {

		.table {

			.list {
				img.crypto {
					width: 30px;
				}

				.actions {

					.btn {

						padding: 0.25rem 0.75rem;
						font-size: .75rem;
					
						&.buy {

                            background: transparent;
							border: 1px solid $primary;

                            &:hover {
                                color: $white;
                                background: $primary;
                                border: 1px solid $white;
                            }
						}
						
						&.sell {
							color: $white;
							background: $secondary;
							border: 1px solid transparent;

                            &:hover {
                                color: $white;
                                background: $primary;
                                border: 1px solid $white;
                            }
						}


					}
				}
			}
		}
	}
</style>
