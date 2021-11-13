import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import AdminLink from './AdminLink';
import UserLink from './UserLink';

const Sidebar = () => {
    const {isAdmin, isLoading} = useAuth();

    if(isLoading) {
        return (
            <div className="pt-3 pb-3 text-center">
              <p>Loading...</p>
            </div>
        );
      }

    return (
        <div>
            {
                isAdmin ? <AdminLink></AdminLink> : <UserLink></UserLink>
            }
        </div>
    );
};

export default Sidebar;