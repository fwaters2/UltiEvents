import React from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import Firebase from './Assets/Firebase'

export default function Temp() {
    const [data, setData] = React.useState([])

    React.useEffect(()=>{
        const unsubscribe=
        Firebase.firestore().collection("Registration")
        .onSnapshot(snapshot => {
            const player = snapshot.docs.map(doc => ({
              ...doc.data()
            }));
            setData(player);
          });

        return unsubscribe
    },[])

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        team
                    </TableCell>
                    <TableCell>
                        gender
                    </TableCell>
                    <TableCell>
                        seasons
                    </TableCell>
                    <TableCell>
                        EXP
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.filter(player=>player.seasons===0).map(player=>(
                    <TableRow>
                        
                            <TableCell>
                                {player.firstName + " " +player.lastName}
                            </TableCell>
                            <TableCell>
                                {player.team}
                            </TableCell>
                            <TableCell>
                                {player.gender}
                            </TableCell>
                            <TableCell>
                                {player.seasons}
                            </TableCell>
                            <TableCell>
                                {player.EXP}
                            </TableCell>
                       
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
