/**
 * File: /Users/tonymedrano/Desktop/test-takers/src/components/UsersList/UsersList.js
 * Project: /Users/tonymedrano/Desktop/test-takers
 * Created Date: Wednesday, September 2nd 2020, 11:02:05 am
 * Author: Tony Alexander Medrano
 * -----
 * Last Modified: Wed Sep 02 2020
 * Modified By: Tony Alexander Medrano
 * -----
 * Copyright (c) 2020 Tony Medrano DVLPR 🤖
 * ------------------------------------
 * Where Megatron is a real super hero!
 */

import React from 'react';

import classes from './UsersList.module.css';

const UsersList = (props) => {
    const users = props.list.map((item) => {
        return <li
            className={classes.Item}
            key={item.userId}>{item.firstName} {item.lastName}</li>;
    });

    return (
        <div className={classes.UsersList}>
            <ul className={classes.List}>
                {users}
            </ul>
        </div>
    )
};

export default UsersList;
