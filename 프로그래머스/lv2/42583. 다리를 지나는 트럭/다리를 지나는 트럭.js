
function solution(bridgeLength, weight, truckWeights) {
    let total = 0;
    let list = [];
    truckWeights = truckWeights.map((weight) => ({ weight, time: 0 }));

    for (let i = 0; i < truckWeights.length; i += 1) {
        const truckWeight = truckWeights[i].weight;
        let bridgeTotalWieght = list.reduce((sum, { weight }) => sum + weight, 0);
        let index = -1;
                
        if (bridgeTotalWieght + truckWeight > weight) {
            index = list.findIndex((truck) => {
                const result = bridgeTotalWieght - truck.weight + truckWeight <= weight;
                bridgeTotalWieght -= truck.weight;
                return result;
            });
            
            total += bridgeLength - (total - (list[index]?.time || total));
        } else {
            total += 1;
        }

        list.splice(0, index + 1);
        list.push(truckWeights[i]);
        truckWeights[i].time = total;
        
        if (list.length > bridgeLength) {
            list.shift();
        }
        
        list = list.filter(({ time }) => time + bridgeLength > total);
    }

    total += bridgeLength;
    return total;
}
