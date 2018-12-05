/*

input: @marblebot pong
output: :bat::signal_strength:

*/

module.exports = function(controller) {
    controller.hears(['^pong'], 'direct_message,direct_mention', function(bot, message) {
        bot.startConversation(message, function(err, convo) {
            convo.say(':bat::signal_strength:');
        });
    });
};
