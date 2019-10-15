import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";

export default function GetExcel() {
  const [deals, setDeals] = React.useState([]);

  React.useEffect(async () => {
    //businesses offering deals
    const names = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1czXkFNcYXY6LRn8_AzX18dHyrSE8lOFbQO_VvKuwxPw/values/C3:C25`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer ya29.Il-bB3QgIK9K70aXtNyiLLfBNNegn-KJ0TLIyEb9ZatZ4ba33VTtyqeJ-UnQu_A8gBvlBnjIFIQH1Dk1ETq8-_UI3Gm6m7mRmm86-j45zcD1UQvctNmnt8HfULrUVLRUYg"
        }
      }
    );
    const nameData = await names.json();

    //deal data
    const deals = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/1czXkFNcYXY6LRn8_AzX18dHyrSE8lOFbQO_VvKuwxPw/values/E3:E25`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer ya29.Il-bB_wLeIYHEcxh46MWCwzqsFOO78EDjhjpxLAtgqZYNxCxP_b_92yMISGka4-0T5f-yKahjrDhtyW4xo9POpGsT_2MV-No9tEN3az8kXNXpptGSSWkxKzljnlXSS2MdQ"
        }
      }
    );
    const dealData = await deals.json();
    setDeals(
      nameData.values.map((name, index) => ({
        name: name[0],
        deal: dealData.values[index]
      }))
    );
  }, []);

  return (
    <div className="App">
      <List>
        {deals.sort((b,a)=>
            a.name - b.name
        ).map(deal => (
          <ListItem>
            <ListItemText primary={deal.name} secondary={deal.deal} />
          </ListItem>
        ))}
        {console.log(deals)}
      </List>
    </div>
  );
}
