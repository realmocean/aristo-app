import { bindNavigate, bindState, UIRoute, UIRoutes, useEffect } from '@tuval/forms';

import { DashboardController } from '../../Domains/Dashboard/Controllers/DashboardController';
import { LayoutController } from '../Controllers/LayoutController';
import { AllCourseListController } from './../../Domains/AllCourses/Controllers/AllCourseListController';
import { CourseController } from '../../Domains/AllCourses/Controllers/CourseController';
import { LectureController } from '../../Domains/AllCourses/Controllers/LectureController';

export const Routes = () => {
    const [LoggedIn, setLoggedIn] = bindState(null);

    let navigate = bindNavigate();
    useEffect(() => {
        if (LoggedIn) {
            navigate("/app(aristo)/library");
            return () => setLoggedIn(false)
        }
    }, [LoggedIn]);

    setLoggedIn(true);

    return UIRoutes(
        UIRoute(
            UIRoute('/app(aristo)/library', AllCourseListController),
            /*  UIRoute(
                 UIRoute('list', UserListController),
                 UIRoute('edit/:employee_id', EditEmployeeController),
             )('my-courses', UsersController), */

            // MARK: Titles Routes
            UIRoute(
                UIRoute('list', AllCourseListController),
            )('all-courses', LayoutController),
            UIRoute(
                UIRoute('learn/lecture/:lecture_id', LectureController),
            )('course/:course_id', CourseController)
        )('/app(aristo)', LayoutController),
        UIRoute('*', DashboardController) //.redirectTo('/app(realmmanager)/dashboard')
    )
    /*
        UIRoutes(
            UIRoute('/app:realmmanager/tenant/list', new TenantsController()),
            UIRoute('/realm_manager/tenant/add', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/edit/:tenant_id', new AddEditTenantController()),
            UIRoute('/realm_manager/tenant/delete/:tenant_id', new DeleteTenantController()),

            UIRoute('/realm_manager/account/list', new AccountsController()),
            UIRoute('/realm_manager/account/add', new NewAccountController()),
            UIRoute('/realm_manager/account/edit/:account_id', new EditAccountController()),
            UIRoute('/realm_manager/account/delete/:account_id', new DeleteTenantController()),
        ) */
}


