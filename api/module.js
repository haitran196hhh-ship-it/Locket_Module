export default function handler(req, res) {
    const defaultImg = "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png";
    const imageUrl = (req.query.img || defaultImg).trim();
    const frameName = (req.query.name || "Tùy Chỉnh").trim();
    const timestamp = Date.now();
    const encodedImg = encodeURIComponent(imageUrl);

    const timeTag = new Date(timestamp + 7 * 3600 * 1000).toISOString().slice(11, 19);

    const moduleContent = `#!name=👑 Khung ${frameName} [${timeTag}] (TranHai307)
#!desc=Mở khoá Locket Gold, Tải ảnh/video từ Camera Roll, Video 60s, Full Filter, Captions VIP & Khung Widget (${frameName}).
#!author=haitran196hhh

[Script]
# 1. Kích hoạt Locket Gold (RevenueCat)
revenuecat = type=http-response, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts$|subscribers\\/[^/]+$), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/Locket_TranHai307.js?v=${timestamp}, requires-body=true, max-size=-1, timeout=60

# 2. Xóa header ETag tránh bị lưu cache gói cũ
deleteHeader = type=http-request, pattern=^https:\\/\\/api\\.revenuecat\\.com\\/.+\\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/deleteHeader.js?v=${timestamp}, timeout=60

# 3. Kích hoạt Camera Roll, Video 60s, Captions & Khung Widget (Gọi thẳng file js/Locket_Unlocked.js)
locketrc = type=http-response, pattern=^https:\\/\\/firebaseremoteconfig\\.googleapis\\.com\\/v1\\/projects\\/locket-4252a\\/.+, script-path=https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/refs/heads/main/js/Locket_Unlocked.js?v=${timestamp}, argument=${encodedImg}, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com, firebaseremoteconfig.googleapis.com
`;

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.status(200).send(moduleContent);
}
