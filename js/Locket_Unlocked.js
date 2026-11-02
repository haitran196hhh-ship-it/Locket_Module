// ============================================================
// Locket Remote Config Rewrite - Bản Chuẩn Đồng Bộ Khung Động, Full Filter Camera & Video 60s
// Mod by: TranHai307 (@trh_ltg)
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = {};
try {
    obj = JSON.parse($response.body || "{}");
} catch (e) {
    obj = {};
}

if (ua.includes("Locket") || ua.includes("locket") || obj.entries || obj.state) {
    obj.Attention = "Chúc mừng bạn! Bản Mod độc quyền bởi TranHai307!";
    obj.state = "UPDATE"; // Bắt buộc có để Locket không bỏ qua cấu hình khi Firebase trả về NO_CHANGE
    obj.entries = obj.entries || {};

    // Giải mã đường dẫn Khung Ảnh từ argument của Shadowrocket
    var rawArg = (typeof $argument !== "undefined" && $argument !== null) ? String($argument) : "";
    var customFrameUrl = "https://raw.githubusercontent.com/haitran196hhh-ship-it/Locket_Module/main/assets/custom_frame.png";
    
    if (rawArg.includes("frame=")) {
        var extracted = rawArg.split("frame=")[1].split("&")[0].replace(/^"|"$/g, '').trim();
        try {
            customFrameUrl = decodeURIComponent(extracted);
        } catch (e) {
            customFrameUrl = extracted;
        }
    } else if (rawArg.startsWith("http")) {
        customFrameUrl = rawArg.replace(/^"|"$/g, '').trim();
    }

    var dynamicUid = "frame_" + Date.now();

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & POPUP HIỂN THỊ KHUNG ĐÃ NHẬN
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD • TRANHAI307",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Đã Nạp Khung & Filter VIP 😎",
            feature_set: [
                {
                    title: "KHUNG WIDGET ĐÃ ĐƯỢC ÁP DỤNG ✨",
                    body: "TRẦN HẢI NÈ BÉ IU 💛 (TikTok: @trh_ltg)",
                    imageURL: customFrameUrl
                }
            ],
            primary_button_title: "Xong",
            campaign: "locket_gold_tranhai_" + dynamicUid,
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & SENTRY
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. VIDEO 60S, GHI ÂM & TOÀN BỘ HIỆU ỨNG FILTER TRÊN CAMERA
    // ============================================================
    var allCameraFilters = [
        "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
        "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
        "tatted", "mohawk", "braces", "slimed", "princess",
        "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
        "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
        "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
        "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
    ];

    Object.assign(obj.entries, {
        max_video_duration: "60.0",
        video_max_duration: "60.0",
        gold_max_video_duration: "60.0",
        camera_roll_max_video_duration: "60.0",
        camera_roll_trim_max_duration: "60.0",
        longer_video_enabled: "true",
        longer_camera_roll_videos_enabled: "true",

        camera: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 15.0,
            qualityMbps: 15.0
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            video_max_duration: 60.0,
            videoMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            trim_max_duration: 60.0,
            trimMaxDuration: 60.0,
            camera_roll_max_duration: 60.0,
            quality_mbps: 15.0,
            qualityMbps: 15.0,
            flash_button: true
        }),
        live_photos: JSON.stringify({ capture: true, video: true, viewing: true, catch_up: true, widget_looping_mode: "never" }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: false,
            force_fetch_all_filters: true,
            precache_filters: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: allCameraFilters
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "true",
        upload_main_image_quality: "1.0",
        upload_main_image_size: "2048",
        upload_thumbnail_image_quality: "0.9",
        upload_thumbnail_image_size: "1080"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999999",
        celebrity_inbox_limit: "999999999",
        celebrity_inbox_enabled: "true",
        celebrity_vip_qr_redemption_enabled: "true",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" } ]}),
        friend_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" } ]}),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true",
        signup_custom_profile_picture: "true",
        user_data_export_enabled: "true",
        username_suggestions_enabled: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        group_contact_invites_enabled: "true",
        groups_onboarding_accept_invite_preview_enabled: "true",
        chat_hyperlink_enabled_mode: "always_enabled",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        conversation_drafts_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET KHUNG ẢNH ĐỘNG (CẤU TRÚC 6 TRƯỜNG CHUẨN GỐC)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "10",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenAlways",
        widget_frame_event: JSON.stringify({
            uid: dynamicUid,
            url: customFrameUrl,
            use_local_time_zone: true,
            placement: "overlay",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: false,
            compact_header: true,
            friends_button: false,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: false, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "🏫 Học Sinh Ngô Quyền & 11A2",
                items: [
                    { overlay_id: "caption:ngo_quyen_1", source: "remote", caption: { background: { colors: ["#0F2027", "#203A43", "#2C5364"] }, icon: { data: "🏫", type: "emoji" }, max_lines: 1, text: "THPT Ngô Quyền - TỤI MÌN A2", text_color: "#F6E07A", type: "static_content" } },
                    { overlay_id: "caption:ngo_quyen_2", source: "remote", caption: { background: { colors: ["#004D40", "#00897B"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Học sinh Ngô Quyền - Oai phong lẫm liệt", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:ngo_quyen_3", source: "remote", caption: { background: { colors: ["#D32F2F", "#F44336"] }, icon: { data: "🏆", type: "emoji" }, max_lines: 1, text: "Tự hào học sinh Ngô Quyền", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_1", source: "remote", caption: { background: { colors: ["#1A2980", "#26D0CE"] }, icon: { data: "💎", type: "emoji" }, max_lines: 1, text: "Lớp 11A2 đẳng cấp không NÈ?", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_2", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "11A2 - Sinh ra để tỏa sáng", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:lop_11a2_3", source: "remote", caption: { background: { colors: ["#F7971E", "#FFD200"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "11A2 vô địch vũ trụ", text_color: "#111111", type: "static_content" } }
                ]
            },
            {
                section: "🎨 General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:link", source: "local", caption: { type: "link" }, overlay_type: "caption" },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:live", source: "local", caption: { type: "live" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } }
                ]
            },
            {
                section: "🎨 Tùy chỉnh by TranHai307",
                items: [
                    { overlay_id: "caption:tin_nong_news", source: "remote", caption: { background: { colors: ["#800000", "#C70039", "#FF1E56"] }, icon: { type: "image", data: "https://img.icons8.com/fluency/96/news.png", source: "url" }, max_lines: 1, text: "BẢN TIN 24/7 🚨", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:quang_da_noi_the", source: "remote", caption: { background: { colors: ["#241C10", "#8C6D23", "#D4AF37", "#F6E07A"] }, icon: { data: "https://img.icons8.com/fluency/96/crown.png", source: "url", type: "image" }, max_lines: 1, text: "Hải đã nói thế thì ok đi em 👑", text_color: "#1A1A1A", type: "static_content" } }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
