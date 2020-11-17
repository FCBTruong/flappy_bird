/**
 * Created by nguye on 11/16/2020.
 */

MovementController = {};

MovementController.move = function (obj, speed, direction) {
    var position = obj.getPosition();
    if (direction == 'horizontal') {
        obj.setPosition(position.x + speed, position.y);
    }
    else if (direction == "vertical") {
        obj.setPosition(position.x, position.y + speed);
    }
};