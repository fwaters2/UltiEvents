import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Subway, DirectionsBike } from '@material-ui/icons'

export default function Directions() {
    return (
        <List>
            <ListItem>
                <ListItemIcon>
                    <Subway />
                </ListItemIcon>
                <ListItemText primary="Stop R18" secondary="Exit 3 or 4" />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DirectionsBike />
                </ListItemIcon>
                <ListItemText primary="Enter from the west to find scooter parking" />
            </ListItem>
        </List>
    )
}
