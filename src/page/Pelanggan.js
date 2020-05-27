import React from 'react';
import { Header, Table, Icon, Segment, Pagination, Dropdown, Button, Grid, Divider, Statistic, Label, Message, List } from 'semantic-ui-react';
import './Pelanggan.scss';

export class Pelanggan extends React.Component{
    render(){
        const tag = [
            { key: 'semua', text:'semua', value: 'semua'},
            { key: 'tag1', text:'tag1', value: 'tag1'},
            { key: 'tag2', text:'tag2', value: 'tag2'}
        ];

        let data = [
            { no:1, id: 123, name: 'dummy data', tag: 'tag1', date: '12/12/12', active: true},
            { no:2, id: 453, name: 'dummy data2', tag: 'tag1', date: '12/12/12', active: true},
            { no:3, id: 434, name: 'dummy data3', tag: 'tag1', date: '12/12/12', active: false},
            { no:4, id: 244, name: 'dummy data4', tag: 'tag1', date: '12/12/12', active: true}
        ]
        
        let statistik = [
            { jumlah_data: 512, jumlah_tag: 12}
        ]

        let tags = [
            { id:121, name: 'tag 1', date:'12/12/12', anggota:12},
            { id:123, name: 'tag 12', date:'12/12/12', anggota:0},
            { id:122, name: 'tag 13', date:'12/12/12', anggota:2},
            { id:124, name: 'tag 14', date:'12/12/12', anggota:42}
        ]
        return(
            <Segment vertical className='segment-container'>
                <Header color='red' icon as='h2' textAlign='center' dividing>
                    <Icon name='users'/>
                    Pelanggan
                    <Header.Subheader>Manajemen Pelanggan</Header.Subheader>
                </Header>
                <Grid className='filter'>
                    <Grid.Column floated='left' width={5}>
                        <Dropdown placeholder='Filter' fluid multiple selection options={tag} />
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button primary icon='add' content='Tambah' labelPosition='right'/>
                    </Grid.Column>
                </Grid>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No.</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Tag</Table.HeaderCell>
                            <Table.HeaderCell>Dibuat</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map((item,i) =>
                            <Table.Row negative={item.active ? false : true } positive={item.active} key={i}>
                                <Table.Cell>{item.no}</Table.Cell>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.id}</Table.Cell>
                                <Table.Cell>
                                    <Icon name='tag'/>
                                    {item.tag}
                                </Table.Cell>
                                <Table.Cell>{item.date}</Table.Cell>
                                <Table.Cell>
                                    <Icon name={item.active ? 'checkmark' : 'close'} />
                                        {item.active ? 'Aktif' : 'Suspend'}
                                    </Table.Cell>
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                <div className='pagination'>
                    <Label as='a' size='large' pointing='right' icon color='teal'>
                        <Icon name='database'/>
                        5 dari
                        <Label.Detail>20 data</Label.Detail>
                    </Label>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </div>
                <br/>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='tags'/>
                        Tag / Giralisasi
                    </Header>
                </Divider>
                <Message info className='tags'
                    icon='tags'
                    header='Tag pelanggan'
                    content='Tag membantu anda membagi pelanggan'
                />
                <List divided relaxed className='tags'>
                    {tags.map((item,i) =>
                    <List.Item key={i}>
                        <List.Icon name='tag' 
                            color={ (item.anggota > 0) ? 'green' : 'red' }
                            verticalAlign='middle'
                        />
                        <List.Content>
                            <List.Header>{item.name}</List.Header>
                            <List.Description>
                                <i>{item.date} ( {item.anggota} pelanggan )</i>
                            </List.Description>
                        </List.Content>
                    </List.Item>
                    )}
                </List>
                <Divider/>
                <Grid columns={2} divided textAlign='center'>
                    <Grid.Row>
                        <Grid.Column>
                            <Statistic>
                                <Statistic.Label>Pelanggan</Statistic.Label>
                                <Statistic.Value><Icon name='user' size='tiny'/> {statistik[0].jumlah_data}</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic>
                                <Statistic.Label>Tag / Giralisasi</Statistic.Label>
                                <Statistic.Value><Icon name='tag' size='tiny'/> {statistik[0].jumlah_tag}</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Pelanggan;