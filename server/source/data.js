const data = {
    owners: [
        {
            id: 1,
            firstName: 'Joe',
            lastName: 'Schmoe',
        },
        {
            id: 2,
            firstName: 'Rita',
            lastName: 'Robeata',
        },
        {
            id: 3,
            firstName: 'Doug',
            lastName: 'DeMuro',
        }
    ],
    cars: [
        {
            id: 1,
            ownerId: 1,
            make: 'Acura',
            model: 'NSX',
            year: '2020',
            vin: '1vwds23456878w456',
            photoUrl: 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/1049x590/quality/80/https://s.aolcdn.com/os/ab/_cms/2020/09/09112212/2020-Acura-NSX-parked.jpg'
        },
        {
            id: 2,
            ownerId: 2,
            make: 'Ford',
            model: 'Fiesta ST',
            year: '2020',
            vin: '2jhosd34564758j9jnk',
            photoUrl: 'https://www.motoringresearch.com/wp-content/uploads/2019/12/fiesta-st-performance-4-1500x844.jpg'
        },
        {
            id: 3,
            ownerId: 3,
            make: 'Mercedes-Benz',
            model: 'AMG E63s Wagon',
            year: '2020',
            vin: '3lkujasd987656789as4',
            photoUrl: 'https://cnet1.cbsistatic.com/img/TNQV49i4eNEEx8-hz62CQiY6DPk=/980x0/2018/05/06/752b771b-5bdd-465f-817a-76b58f1a9ac0/001-2018-mercedes-amg-e63-wagon-review.jpg'
        },
    ]
}

module.exports = data