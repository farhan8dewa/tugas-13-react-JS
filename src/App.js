import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Table ,Label , Menu ,Icon ,Search,Placeholder,Grid,List,Segment ,Divider,Header,Button } from "semantic-ui-react"

class App extends Component {
  render() {
    return (
    <div>
     <br />
        <Segment placeholder verticalAlign='left'>
            <Grid  columns={2} stackable textAlign='center'>
              <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Header icon>
                  <Icon name='search' />
                    cari document
                 </Header>

                  <Search placeholder='Search document...' />
              </Grid.Column>

                   <Grid.Column>
                     <Header icon>
                       <Icon name='pdf file outline' />
                        tambah document baru
                     </Header>
                       <Button primary>create document</Button>
               </Grid.Column>
            </Grid.Row>
          </Grid>
       </Segment>



     <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length='medium' />
                <Placeholder.Line length='short' />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment raised>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line length='medium' />
            <Placeholder.Line length='short' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Grid.Column>
    <Grid.Column>
    <List>
        <h3>website terkait</h3>
         <List.Item icon='linkify' content={<a href='https://www.google.com/'>geogle</a>} />
         <List.Item icon='linkify' content={<a href='http://www.facebook.com'>facebook</a>} />
         <List.Item icon='linkify' content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>} />
         <List.Item icon='linkify' content={<a href='http://www.react.com'>react</a>} />
    </List>
    </Grid.Column>
   </Grid>

   <br /><br /><br />
      <Grid container columns={1}>
       <Grid.Column>
         <Table called>
          <Table.Footer>

              <Table.HeaderCell >
                <Menu floated='right' pagination>

                  <Search placeholder='Search document...' />
                </Menu>
              </Table.HeaderCell>

          </Table.Footer>
         </Table>

            <Table celled>
              <Table.Header>
                <Table.Row>
                   <Table.HeaderCell textAlign='center'>nama document</Table.HeaderCell>
                   <Table.HeaderCell textAlign='center'>jenis file</Table.HeaderCell>

                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>panduan belajar java script</Label>
                  </Table.Cell>
                   <Table.Cell textAlign='center'>pdf</Table.Cell>
               </Table.Row>
              </Table.Body>

              <Table.Body>
                <Table.Row>
                 <Table.Cell>
                   panduan belajar css
                 </Table.Cell>
                   <Table.Cell textAlign='center'>pdf</Table.Cell>
               </Table.Row>
              </Table.Body>

              <Table.Body>
               <Table.Row>
                 <Table.Cell>
                  panduan belajar react js
                 </Table.Cell>
                 <Table.Cell textAlign='center'>pdf</Table.Cell>
               </Table.Row>
              </Table.Body>

              <Table.Footer>
               <Table.Row>
                 <Table.HeaderCell colSpan='3'>
                   <Menu floated='right' pagination>
                     <Menu.Item as='a' icon>
                       <Icon name='chevron left' />
                    </Menu.Item>
                       <Menu.Item as='a'>1</Menu.Item>
                       <Menu.Item as='a'>2</Menu.Item>
                       <Menu.Item as='a'>3</Menu.Item>
                       <Menu.Item as='a'>4</Menu.Item>
                       <Menu.Item as='a' icon>
                     <Icon name='chevron right' />
                     </Menu.Item>
                   </Menu>
                 </Table.HeaderCell>
               </Table.Row>
              </Table.Footer>
            </Table>
        </Grid.Column>
        </Grid>
        <br /> <br />
      </div>
    );
  }
}

export default App;
