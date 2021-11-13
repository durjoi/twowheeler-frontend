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
        <div style={{ width: '100%', height: '100vh', padding: '20px', border: '1px solid grey' }}>
            {
                isAdmin ? <AdminLink></AdminLink> : <UserLink></UserLink>
            }

        </div>
    );
};

export default Sidebar;