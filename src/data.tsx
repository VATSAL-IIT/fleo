export interface FileNode {
    id: string
    totalSales: number
    targetSales: number
    children?: FileNode[]
}

export const root: FileNode = {
    id: "Tata Steel",
    totalSales: 200,
    targetSales: 400,
    children: [{
        id: "Factory A",
        totalSales: 20,
        targetSales: 100,
        children: [{
            id: "Godown A",
            totalSales: 10,
            targetSales: 50,
            children: [{
                id: "WareHouse A",
                totalSales: 8,
                targetSales: 20,
                children: [{
                    id: "Stock A",
                    totalSales: 4,
                    targetSales: 10,
                },
                {
                    id: "Stock B",
                    totalSales: 4,
                    targetSales: 10,
                }]
            },
            {
                id: "WareHouse B",
                totalSales: 2,
                targetSales: 30,
                children: [{
                    id: "Stock A",
                    totalSales: 1,
                    targetSales: 10,
                },
                {
                    id: "Stock B",
                    totalSales: 1,
                    targetSales: 20,
                }]
            }
            ]
        },
        {
            id: "Godown B",
            totalSales: 10,
            targetSales: 50,
            children: [{
                id: "WareHouse A",
                totalSales: 5,
                targetSales: 10,
                children: [{
                    id: "Stock A",
                    totalSales: 2,
                    targetSales: 5,
                },
                {
                    id: "Stock B",
                    totalSales: 2,
                    targetSales: 5,
                }]
            }, {
                id: "WareHouse B",
                totalSales: 5,
                targetSales: 40,
                children: [{
                    id: "Stock A",
                    totalSales: 2,
                    targetSales: 20,
                },
                {
                    id: "Stock B",
                    totalSales: 3,
                    targetSales: 20,
                }]
            }]
        }]
    },
    {
        id: "Factory B",
        totalSales: 150,
        targetSales: 200,
        children: [{
            id: "Godown A",
            totalSales: 80,
            targetSales: 100,
            children: [{
                id: "WareHouse A",
                totalSales: 30,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 15,
                    targetSales: 20,
                },
                {
                    id: "Stock B",
                    totalSales: 15,
                    targetSales: 30,
                }]
            },
            {
                id: "WareHouse B",
                totalSales: 50,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 20,
                    targetSales: 20,
                },
                {
                    id: "Stock B",
                    totalSales: 30,
                    targetSales: 30,
                }]
            }
            ]
        },
        {
            id: "Godown B",
            totalSales: 70,
            targetSales: 100,
            children: [{
                id: "WareHouse A",
                totalSales: 30,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 10,
                    targetSales: 25,
                },
                {
                    id: "Stock B",
                    totalSales: 20,
                    targetSales: 25,
                }]
            }, {
                id: "WareHouse B",
                totalSales: 40,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 20,
                    targetSales: 30,
                },
                {
                    id: "Stock B",
                    totalSales: 20,
                    targetSales: 20,
                }]
            }]
        }]
    },
    {
        id: "Factory C",
        totalSales: 30,
        targetSales: 200,
        children: [{
            id: "Godown A",
            totalSales: 10,
            targetSales: 100,
            children: [{
                id: "WareHouse A",
                totalSales: 5,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 2,
                    targetSales: 30,
                },
                {
                    id: "Stock B",
                    totalSales: 3,
                    targetSales: 20,
                }]
            },
            {
                id: "WareHouse B",
                totalSales: 5,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 3,
                    targetSales: 30,
                },
                {
                    id: "Stock B",
                    totalSales: 2,
                    targetSales: 20,
                }]
            }
            ]
        },
        {
            id: "Godown B",
            totalSales: 20,
            targetSales: 100,
            children: [{
                id: "WareHouse A",
                totalSales: 10,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 4,
                    targetSales: 30,
                },
                {
                    id: "Stock B",
                    totalSales: 6,
                    targetSales: 20,
                }]
            }, {
                id: "WareHouse B",
                totalSales: 10,
                targetSales: 50,
                children: [{
                    id: "Stock A",
                    totalSales: 4,
                    targetSales: 40,
                },
                {
                    id: "Stock B",
                    totalSales: 6,
                    targetSales: 10,
                }]
            }]
        }]
    }
    ]
}