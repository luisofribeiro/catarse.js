import m from 'mithril';
import _ from 'underscore';
import h from '../h';
import userVM from '../vms/user-vm';
import userHeader from '../c/user-header';
import userCreated from '../c/user-created';
import userAboutEdit from '../c/user-about-edit';
import userPrivateContributed from '../c/user-private-contributed';
import userSettings from '../c/user-settings';
import userBilling from '../c/user-billing';
import userNotifications from '../c/user-notifications';
import menu from '../root/menu';

const usersEdit = {
    controller(args) {
        const userDetails = m.prop({}),
            userId = args.user_id.split('-')[0],
            hash = m.prop(window.location.hash),
            displayTabContent = (user) => {
                const tabs = {
                    '#projects': m(userCreated, {
                        userId,
                        showDraft: true
                    }),
                    '#contributions': m(userPrivateContributed, {
                        userId,
                        user
                    }),
                    '#about_me': m(userAboutEdit, {
                        userId,
                        user
                    }),
                    '#settings': m(userSettings, {
                        userId,
                        user
                    }),
                    '#notifications': m(userNotifications, {
                        userId,
                        user
                    }),
                    '#billing': m(userBilling, {
                        userId,
                        user
                    })
                };

                hash(window.location.hash);

                if (_.isEmpty(hash()) || hash() === '#_=_') {
                    hash('#contributions');
                    return tabs['#contributions'];
                }

                return tabs[hash()];
            };

        h.redrawHashChange();
        userVM.fetchUser(userId, true, userDetails);
        return {
            displayTabContent,
            hash,
            userDetails,
        };
    },

    view(ctrl, args) {
        const user = ctrl.userDetails();

        return m('div', [
            m(menu, {
                menuTransparency: true
            }),
            m(userHeader, {
                user,
                hideDetails: true
            }),
            (!_.isEmpty(user) ? [m('nav.dashboard-nav.u-text-center', {
                style: {
                    'z-index': '10',
                    position: 'relative'
                }
            },
                        m('.w-container', [
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#contributions' ? '.selected' : '')}[data-target='#dashboard_contributions'][href='#contributions'][id='dashboard_contributions_link']`, 'Apoiados'),
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#projects' ? '.selected' : '')}[data-target='#dashboard_projects'][href='#projects'][id='dashboard_projects_link']`,
                                'Criados'
                            ),
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#about_me' ? '.selected' : '')}[data-target='#dashboard_about_me'][href='#about_me'][id='dashboard_about_me_link']`,
                              'Perfil Público'
                            ),
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#settings' ? '.selected' : '')}[data-target='#dashboard_settings'][href='#settings'][id='dashboard_settings_link']`,
                                'Dados e endereço'
                            ),
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#notifications' ? '.selected' : '')}[data-target='#dashboard_notifications'][href='#notifications'][id='dashboard_notifications_link']`,
                                'Notificações'
                            ),
                            m(`a.dashboard-nav-link${(ctrl.hash() === '#billing' ? '.selected' : '')}[data-target='#dashboard_billing'][href='#billing'][id='dashboard_billing_link']`,
                                'Banco e cartões'
                            ),
                            m(`a.dashboard-nav-link.u-right-big-only[href='/pt/users/${user.id}']`, {
                                config: m.route,
                                onclick: () => {
                                    m.route(`/users/${user.id}`, {
                                        user_id: user.id
                                    });
                                }
                            },
                                'Ir para o perfil público'
                            )
                        ])
                    ),

                m('section.section',
                        m('.w-container',
                            m('.w-row', user.id ? ctrl.displayTabContent(user) : h.loader())
                        )
                    )

            ] :
                '')
        ]);
    }
};

export default usersEdit;
