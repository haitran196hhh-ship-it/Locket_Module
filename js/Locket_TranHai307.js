// ============================================================
// Locket Gold Entitlements - Mod by TranHai307
// ============================================================

const mapping = {
  'Locket': ['Gold']
};

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

obj.Attention = "Chúc mừng bạn! Bản quyền Locket Gold bởi Trần Hải (TranHai307 - TikTok: @trh_ltg)";

var tranhai307_sub = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: true,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    "amount": 399000.0,
    "currency": "VND"
  },
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2010-07-30T00:00:00Z",
  purchase_date: "2010-07-30T00:00:00Z",
  store: "app_store",
  store_transaction_id: "3070001108724193"
};

var locketGold = {
  grace_period_expires_date: null,
  purchase_date: "2010-07-30T00:00:00Z",
  product_identifier: "locket_1600_1y",
  expires_date: "2099-12-31T23:59:59Z"
};

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

const match = Object.keys(mapping).find(e => ua.includes(e));
if (match) {
  let [e, s] = mapping[match];
  if (s) {
    locketGold.product_identifier = s;
    obj.subscriber.subscriptions[s] = tranhai307_sub;
  } else {
    obj.subscriber.subscriptions["locket_1600_1y"] = tranhai307_sub;
  }
  obj.subscriber.entitlements[e] = locketGold;
  obj.subscriber.entitlements["Gold"] = locketGold;
  obj.subscriber.entitlements["pro"] = locketGold;
} else {
  obj.subscriber.subscriptions["locket_1600_1y"] = tranhai307_sub;
  obj.subscriber.entitlements["Gold"] = locketGold;
  obj.subscriber.entitlements.pro = locketGold;
}

$done({
  body: JSON.stringify(obj)
});
