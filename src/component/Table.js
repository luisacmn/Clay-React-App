import React from "react"
import ClayTable from '@clayui/table';
import ClayButton from '@clayui/button';
import ClayToolbar from '@clayui/toolbar';

function Table({users}) {
  
    return (
      <ClayTable>
        <ClayTable.Head>
          <ClayTable.Row>
            <ClayTable.Cell expanded headingCell>{"Name"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Family Name"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Email"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"User Name"}</ClayTable.Cell>
            <ClayTable.Cell headingCell>{"Modify"}</ClayTable.Cell>
          </ClayTable.Row>
        </ClayTable.Head>
        <ClayTable.Body>
            {users.map(user => (
                <ClayTable.Row key={user.id}>
                    <ClayTable.Cell headingTitle>{user.givenName}</ClayTable.Cell>
                    <ClayTable.Cell>{user.familyName}</ClayTable.Cell>
                    <ClayTable.Cell>{user.emailAddress}</ClayTable.Cell>
                    <ClayTable.Cell>{user.alternateName}</ClayTable.Cell>
                    <ClayTable.Cell>
                        <ClayToolbar.Item>
                            <ClayToolbar.Section>
                                <ClayButton displayType="secondary" onClick={() => {}}>
                                {"Del"}
                                </ClayButton>
                                <ClayButton className="inline-item-after" onClick={() => {}}>
                                {"Edit"}
                                </ClayButton>
                            </ClayToolbar.Section>
                        </ClayToolbar.Item>
                    </ClayTable.Cell>
                </ClayTable.Row>
            ))}
        </ClayTable.Body>
      </ClayTable>
    );
  };
  
export default Table;

 
