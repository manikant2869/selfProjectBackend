const client = require("prom-client");
const register = new client.Registry();
const count = new client.Counter({
  name: "http_request_total_count",
  help: "counting the total request on / ",
 labelNames: ["method","statuscode","route"],
  // collect() {
  //   // Invoked when the registry collects its metrics' values.
  //   // This can be synchronous or it can return a promise/be an async function.
  //   this.set(/* the current value */);
  // }
})
const count_signup = new client.Counter({
  name: "http_user_signup_count",
  help: "counting the signup request",
  labelNames: ["route","method"]
})
const count_login = new client.Counter({
    name: "http_user_login_count",
  help: "counting the login request",
  labelNames: ["route","method"]
})
const gauge = new client.Gauge({
    name : "http_request_inprogress",
    help: "Request in progress",
    labelNames : [ "method" , "route" ]
})
const summary = new client.Summary({
    name : "http_request_latency",
    help: "Request latency",
    labelNames : [ "method" , "route" ]
})
const h = new client.Histogram({
	name: 'test_histogram',
	help: 'Example of a histogram',
	labelNames: ['code'],
});

register.registerMetric(count)
register.registerMetric(count_signup)
register.registerMetric(count_login)
register.registerMetric(gauge);
register.registerMetric(summary)
register.registerMetric(h);
module.exports = {
    register,
    count,
    count_signup,
    count_login,
    gauge,
    summary,
    h
}