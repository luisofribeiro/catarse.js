import adminUsers from './root/admin-users';
import adminContributions from './root/admin-contributions';
import flex from './root/flex';
import insights from './root/insights';
import posts from './root/posts';
import jobs from './root/jobs';
import liveStatistics from './root/live-statistics';
import projectsContributionReport from './root/projects-contribution-report';
import projectsDashboard from './root/projects-dashboard';
import projectsExplore from './root/projects-explore';
import projectsHome from './root/projects-home';
import projectsShow from './root/projects-show';
import usersShow from './root/users-show';
import usersEdit from './root/users-edit';
import projectsPayment from './root/projects-payment';
import projectsReward from './root/projects-reward';
import publish from './root/publish';
import start from './root/start';
import team from './root/team';
import usersBalanceMain from './root/users-balance-main';
import menu from './root/menu';
import footer from './root/footer';
import FollowFoundFriends from './root/follow-found-friends';
import thankYou from './root/thank-you';
import CheckEmail from './root/check-email';
import projectEditUserAbout from './root/project-edit-user-about';
import copyTextInput from './c/copy-text-input';

const c = {
    root: {
        AdminUsers: adminUsers,
        AdminContributions: adminContributions,
        ClipboardCopy: copyTextInput,
        Flex: flex,
        Insights: insights,
        Posts: posts,
        Jobs: jobs,
        LiveStatistics: liveStatistics,
        ProjectsContributionReport: projectsContributionReport,
        ProjectsDashboard: projectsDashboard,
        ProjectsExplore: projectsExplore,
        ProjectsHome: projectsHome,
        ProjectsShow: projectsShow,
        UsersShow: usersShow,
        UsersEdit: usersEdit,
        ProjectsPayment: projectsPayment,
        ProjectsReward: projectsReward,
        ThankYou: thankYou,
        Publish: publish,
        Start: start,
        Team: team,
        UsersBalance: usersBalanceMain,
        Menu: menu,
        Footer: footer,
        FollowFoundFriends,
        CheckEmail,
        projectEditUserAbout
    }
};

export default c;
