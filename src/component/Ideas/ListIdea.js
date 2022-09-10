import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from 'reactstrap';
export default function ListIdea({ ideas }) {
  let count = 0;
  return (
    <div className="ideas-list">
      <ListGroup>
        {ideas &&
          ideas.map((item) => {
            count++;
            let rowclass = count % 5 == 0 ? 'even' : 'odd';
            return (
              <>
                <ListGroupItem
                  key={item.id}
                  className={rowclass == 'even' ? 'active' : ''}
                >
                  <ListGroupItemHeading>
                    {item.fields['title']}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {item.fields['description']}
                  </ListGroupItemText>
                  <ListGroupItemText>
                    Apply at Company &nbsp;
                    <a href={item.fields['url']} target="_new">
                      Website
                    </a>
                    <Button type="submit" title="Apply">Apply</Button>
                  </ListGroupItemText>
                </ListGroupItem>
              </>
            );
          })}
      </ListGroup>
    </div>
  );
}
