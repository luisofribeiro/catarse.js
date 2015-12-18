/**
 * window.c.UserBalance component
 * Render the current user total balance and request fund action
 *
 * Example:
 * m.component(c.UserBalance, {
 *     user_id: 123,
 * })
 */
window.c.UserBalance = ((m, h, _, models, c) => {
    return {
        controller: (args) => {
            let displayModal = h.toggleProp(false, true);

            args.balanceManager.load();

            return {
                userBalances: args.balanceManager.collection,
                displayModal: displayModal
            };
        },
        view: (ctrl, args) => {
            let balance = _.first(ctrl.userBalances()),
                balanceRequestModalC = [
                    'UserBalanceRequestModalContent',
                    _.extend({}, {balance: balance}, args)
                ];

            return m('.w-section.section.user-balance-section', [
                (ctrl.displayModal() ? m.component(c.ModalBox, {
                    displayModal: ctrl.displayModal,
                    content: balanceRequestModalC
                }) : ''),
                m('.w-container', [
                    m('.w-row', [
                        m('.w-col.w-col-8.u-text-center-small-only.u-marginbottom-20', [
                            m('.fontsize-larger', [
                                'Saldo ',
                                m('span.text-success', `R$ ${h.formatNumber(balance.amount, 2, 3)}`)
                            ])
                        ]),
                        m('.w-col.w-col-4', [
                            m(`a[class="w-button btn btn-medium u-marginbottom-10 ${(balance.amount <= 0 ? "btn-inactive" : "")}"][href="js:void(0);"]`,
                              {onclick: (balance.amount > 0 ? ctrl.displayModal.toggle : 'js:void(0);')},
                              '$ Realizar Saque')
                        ])
                    ])
                ])
            ]);
        }
    };
} (window.m, window.c.h, window._, window.c.models, window.c));
