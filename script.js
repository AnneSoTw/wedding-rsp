const translations = {
    en: {
        headerTitle: "Our Wedding",
        headerDescription: "Join us to celebrate our special day! Please RSVP by [Your RSVP Date Here].",
        page1Title: "Guest Information",
        guestSideLabel: "Are you a guest of the:",
        guestSideGroom: "Groom's Side",
        guestSideBride: "Bride's Side",
        chineseNameLabel: "Chinese Name (姓名):",
        chineseNameHelper: "Required if you are a guest of the Groom.",
        englishNameLabel: "English Name:",
        englishNameHelper: "Required if you are a guest of the Bride.",
        emailLabel: "Email (電子郵件):",
        attendanceLabel: "Will you be able to attend?",
        attendanceYes: "Yes, I will attend",
        attendanceNo: "Sorry, I cannot attend",
        nextButton: "Next",
        prevButton: "Previous",
        page2Title: "Accompanying Guests",
        page2Description: "Please add details for each person attending with you (including yourself if you are attending).",
        addGuestButton: "Add Guest",
        guestEntryTitle: "Guest",
        guestNameLabel: "Name (姓名):",
        isChildLabel: "Is this guest a child? (是否為兒童)",
        childSeatLabel: "Child Seat Needed? (需要兒童座椅?)",
        childMealLabel: "Child Meal Needed? (需要兒童餐?)",
        mealPreferenceLabel: "Meal Preference (飲食偏好):",
        mealStandard: "Standard (標準)",
        mealVegetarian: "Vegetarian (素食)",
        mealVegan: "Vegan (全素)",
        mealOther: "Other (其他 - please specify)",
        allergiesLabel: "Any dietary restrictions or allergies? (飲食限制或過敏):",
        allergiesPlaceholder: "e.g., nuts, gluten-free...",
        removeGuestButton: "Remove", // Still needed for lang toggle on dynamic buttons if they had text
        page3Title: "Contact Preferences",
        page3Description: "How do you prefer we contact you for updates? (At least one method required)",
        contactPhone: "Phone (電話)",
        contactPhonePlaceholder: "Enter phone number",
        contactEmail: "Email (電子郵件)",
        contactEmailPlaceholder: "Enter email address",
        contactLine: "LINE",
        contactLinePlaceholder: "Enter LINE ID",
        contactWhatsapp: "WhatsApp",
        contactWhatsappPlaceholder: "Enter WhatsApp number",
        contactIg: "Instagram",
        contactIgPlaceholder: "Enter Instagram handle",
        contactFacebook: "Facebook",
        contactFacebookPlaceholder: "Enter Facebook name/profile link",
        finalPageTitle: "Final Step",
        messageLabel: "Any message for the couple?",
        messagePlaceholder: "Your wishes, song requests, etc.",
        lineInfo: "You can also add us on LINE!",
        lineLinkText: "Click here to add us on LINE",
        submitRsvpButton: "Submit RSVP",
        thankYouTitle: "Thank You!",
        thankYouBodyAttending: "Your response has been recorded. We eagerly look forward to celebrating with you! A confirmation email has been sent.",
        thankYouBodyNotAttending: "Your response has been recorded. We're sad you can't make it, but we appreciate you letting us know. A confirmation email has been sent.",
        saveTheDate: "We're Excited!",
        emailSending: "Sending your RSVP...",
        emailSuccess: "RSVP sent successfully! You should receive a confirmation email shortly.",
        emailError: "Failed to send RSVP. Please try again or contact us directly.",
        validationRequired: "This field is required.",
        validationEmail: "Please enter a valid email address.",
        validationGuestSide: "Please select if you are a guest of the Groom or Bride.",
        validationAttendance: "Please let us know if you can attend.",
        validationChineseNameRequired: "Chinese name is required for Groom's side.",
        validationEnglishNameRequired: "English name is required for Bride's side.",
        validationContactMethod: "Please provide details for the selected contact methods.",
        validationMinOneContact: "Please select and provide details for at least one contact method.", // New
        backToStart: "Back to Start"
    },
    zh: {
        headerTitle: "我們的婚禮",
        headerDescription: "誠摯邀請您參與我們的婚禮！請於 [您的回覆截止日期] 前回覆。",
        page1Title: "賓客資訊",
        guestSideLabel: "您是男方或女方親友：",
        guestSideGroom: "新郎親友",
        guestSideBride: "新娘親友",
        chineseNameLabel: "中文姓名:",
        chineseNameHelper: "若您是新郎親友，此欄位為必填。",
        englishNameLabel: "英文姓名:",
        englishNameHelper: "若您是新娘親友，此欄位為必填。",
        emailLabel: "電子郵件:",
        attendanceLabel: "您是否能出席？",
        attendanceYes: "是的，我會參加",
        attendanceNo: "抱歉，無法出席",
        nextButton: "下一步",
        prevButton: "上一頁",
        page2Title: "同行賓客資料",
        page2Description: "請填寫所有出席賓客的資料（若您會出席，也請包含您自己）。",
        addGuestButton: "新增同行賓客",
        guestEntryTitle: "賓客",
        guestNameLabel: "姓名:",
        isChildLabel: "是否為兒童?",
        childSeatLabel: "需要兒童座椅?",
        childMealLabel: "需要兒童餐?",
        mealPreferenceLabel: "飲食偏好:",
        mealStandard: "標準",
        mealVegetarian: "素食",
        mealVegan: "全素",
        mealOther: "其他 (請註明)",
        allergiesLabel: "飲食限制或過敏:",
        allergiesPlaceholder: "例如：堅果、無麩質...",
        removeGuestButton: "移除此位", // Still needed
        page3Title: "聯絡偏好",
        page3Description: "我們應如何與您聯絡後續事宜？（至少需擇一並填寫資料）",
        contactPhone: "電話",
        contactPhonePlaceholder: "請輸入電話號碼",
        contactEmail: "電子郵件",
        contactEmailPlaceholder: "請輸入電子郵件地址",
        contactLine: "LINE",
        contactLinePlaceholder: "請輸入LINE ID",
        contactWhatsapp: "WhatsApp",
        contactWhatsappPlaceholder: "請輸入WhatsApp號碼",
        contactIg: "Instagram",
        contactIgPlaceholder: "請輸入Instagram帳號",
        contactFacebook: "Facebook",
        contactFacebookPlaceholder: "請輸入Facebook名稱/個人檔案連結",
        finalPageTitle: "最後一步",
        messageLabel: "給新人的祝福或留言：",
        messagePlaceholder: "您的祝福、想點播的歌曲等",
        lineInfo: "您也可以加入我們的LINE！",
        lineLinkText: "點此加入我們的LINE",
        submitRsvpButton: "送出回覆",
        thankYouTitle: "感謝您！",
        thankYouBodyAttending: "您的回覆已成功送出。我們熱切期待與您一同慶祝！確認郵件已寄出。",
        thankYouBodyNotAttending: "您的回覆已成功送出。很遺憾您無法參加，但感謝您的告知。確認郵件已寄出。",
        saveTheDate: "期待相見！",
        emailSending: "正在發送您的回覆...",
        emailSuccess: "回覆已成功發送！您很快就會收到一封確認郵件。",
        emailError: "回覆發送失敗。請稍後再試或直接與我們聯繫。",
        validationRequired: "此欄位為必填。",
        validationEmail: "請輸入有效的電子郵件地址。",
        validationGuestSide: "請選擇您是男方或女方親友。",
        validationAttendance: "請告知您是否能出席。",
        validationChineseNameRequired: "新郎親友需填寫中文姓名。",
        validationEnglishNameRequired: "新娘親友需填寫英文姓名。",
        validationContactMethod: "請為已選的聯絡方式提供詳細資料。",
        validationMinOneContact: "請至少選擇並填寫一種聯絡方式。", // New
        backToStart: "返回首頁"
    }
};

let currentLanguage = 'en';
let currentPage = 'page1';
const rsvpData = {
    guests: []
};

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    showPage(currentPage);
    document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
    document.getElementById('langZh').addEventListener('click', () => setLanguage('zh'));

    document.querySelectorAll('.choice-button[name="guestSide"]').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.choice-button[name="guestSide"]').forEach(btn => btn.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            const side = e.currentTarget.dataset.value;
            document.getElementById('guestSide').value = side;
            updateNameRequirement(side); // Call new function
        });
    });
     document.querySelectorAll('.choice-button[name="attendance"]').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.choice-button[name="attendance"]').forEach(btn => btn.classList.remove('selected'));
            e.currentTarget.classList.add('selected');
            document.getElementById('attendance').value = e.currentTarget.dataset.value;
            // No direct call to handleAttendance on click, it's called before page progression
        });
    });

    emailjs.init("YOUR_USER_PUBLIC_KEY"); 
});

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[placeholder-translate]').forEach(el => {
        const key = el.placeholderTranslate;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.getElementById('langEn').classList.toggle('active', lang === 'en');
    document.getElementById('langZh').classList.toggle('active', lang === 'zh');

    const guestSide = document.getElementById('guestSide').value;
    updateNameRequirement(guestSide); // Re-evaluate name requirements on lang change

    // For dynamically added remove buttons, if they had text (not relevant for icon)
    // document.querySelectorAll('.remove-guest-button').forEach(button => {
    //     button.innerHTML = `<span class="lang-zh">${translations.zh.removeGuestButton}</span><span class="lang-en">${translations.en.removeGuestButton}</span>`;
    // });
    document.querySelectorAll('.guest-entry h3').forEach(header => {
         header.setAttribute('data-translate', 'guestEntryTitle'); // Ensure it has the key
         header.innerHTML = translations[currentLanguage].guestEntryTitle;
    });
}

function showPage(pageId) {
    document.querySelectorAll('.form-page').forEach(page => page.classList.add('hidden'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        currentPage = pageId;
        window.scrollTo(0, 0); 
    } else {
        console.error("Page not found:", pageId);
    }
}

// --- PAGE 1 LOGIC ---
function updateNameRequirement(side) {
    const chineseNameInput = document.getElementById('chineseName');
    const englishNameInput = document.getElementById('englishName');
    const chineseNameHelper = document.getElementById('chineseNameHelper');
    const englishNameHelper = document.getElementById('englishNameHelper');
    const chineseNameStar = document.getElementById('chineseNameStar');
    const englishNameStar = document.getElementById('englishNameStar');

    // Reset first
    chineseNameInput.required = false;
    englishNameInput.required = false;
    chineseNameStar.classList.add('hidden');
    englishNameStar.classList.add('hidden');
    chineseNameHelper.style.fontWeight = 'normal';
    englishNameHelper.style.fontWeight = 'normal';

    if (side === 'groom') {
        chineseNameInput.required = true;
        chineseNameStar.classList.remove('hidden');
        chineseNameHelper.style.fontWeight = 'bold';
    } else if (side === 'bride') {
        englishNameInput.required = true;
        englishNameStar.classList.remove('hidden');
        englishNameHelper.style.fontWeight = 'bold';
    }

    // Update helper text language regardless
    chineseNameHelper.textContent = translations[currentLanguage].chineseNameHelper;
    englishNameHelper.textContent = translations[currentLanguage].englishNameHelper;
}


function handleAttendance(response) { // This function is now less critical for button logic
    // document.getElementById('attendance').value = response; // Set by choice button already
    // Logic to change Next button's destination is handled in validateAndGoToPage2
}

function validatePage1() {
    let isValid = true;
    const guestSide = document.getElementById('guestSide').value;
    const chineseName = document.getElementById('chineseName').value.trim();
    const englishName = document.getElementById('englishName').value.trim();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const attendance = document.getElementById('attendance').value;

    if (!guestSide) {
        alert(translations[currentLanguage].validationGuestSide);
        isValid = false;
    } else if (guestSide === 'groom' && !chineseName) {
        alert(translations[currentLanguage].validationChineseNameRequired);
        document.getElementById('chineseName').focus();
        isValid = false;
    } else if (guestSide === 'bride' && !englishName) {
        alert(translations[currentLanguage].validationEnglishNameRequired);
        document.getElementById('englishName').focus();
        isValid = false;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert(translations[currentLanguage].validationEmail);
        if(isValid) emailInput.focus(); // Focus only if previous checks passed
        isValid = false;
    }
    if (!attendance) {
        alert(translations[currentLanguage].validationAttendance);
        isValid = false;
    }
    return isValid;
}

function validateAndGoToPage2() {
    if (!validatePage1()) return;
    rsvpData.guestSide = document.getElementById('guestSide').value;
    rsvpData.chineseName = document.getElementById('chineseName').value.trim();
    rsvpData.englishName = document.getElementById('englishName').value.trim();
    rsvpData.email = document.getElementById('email').value.trim();
    rsvpData.attending = document.getElementById('attendance').value;

    if (rsvpData.attending === 'yes') {
        const guestListContainer = document.getElementById('guestListContainer');
        if (guestListContainer.childElementCount === 0) {
             addGuestEntry(true); // Add main respondent automatically, mark as non-deletable
        }
        showPage('page2');
    } else {
        showFinalPageForNoAttending();
    }
}

function showFinalPageForNoAttending() {
    document.getElementById('finalPageContent').classList.remove('hidden');
    document.getElementById('thankYouMessage').classList.add('hidden');
    document.getElementById('backToStartButton').classList.add('hidden');
    showPage('finalPage');
}

// --- PAGE 2 LOGIC (GUEST ENTRIES) ---
let guestIdCounter = 0; // To ensure unique IDs for guests if needed later, not strictly used now for deletion
function addGuestEntry(isFirstGuest = false) {
    guestIdCounter++;
    const template = document.getElementById('guestEntryTemplate').content.cloneNode(true);
    const guestEntryDiv = template.querySelector('.guest-entry');
    // guestEntryDiv.dataset.guestId = guestIdCounter; // If you need to reference by ID

    const removeButton = guestEntryDiv.querySelector('.remove-guest-button');
    if (isFirstGuest) {
        removeButton.classList.add('hidden'); // First guest (main respondent) cannot be removed
    } else {
        removeButton.classList.remove('hidden');
    }
    
    // Translate static text within the template before appending
    guestEntryDiv.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (translations[currentLanguage][key]) {
            el.innerHTML = translations[currentLanguage][key];
        }
    });
     // Specifically re-translate the Guest H3 title as it's in the template
    const guestTitleElement = guestEntryDiv.querySelector('h3[data-translate="guestEntryTitle"]');
    if (guestTitleElement) {
        guestTitleElement.innerHTML = translations[currentLanguage].guestEntryTitle;
    }

    guestEntryDiv.querySelectorAll('[placeholder-translate]').forEach(el => {
        const key = el.placeholderTranslate;
        if (translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });

    // If it's the first guest (main respondent), prefill their name
    if (isFirstGuest) {
        const guestNameInput = guestEntryDiv.querySelector('input[name="guestName"]');
        const mainChineseName = document.getElementById('chineseName').value.trim();
        const mainEnglishName = document.getElementById('englishName').value.trim();
        let prefilledName = "";
        if (mainChineseName && mainEnglishName) {
             prefilledName = currentLanguage === 'zh' ? `${mainChineseName} (${mainEnglishName})` : `${mainEnglishName} (${mainChineseName})`;
        } else {
            prefilledName = mainChineseName || mainEnglishName;
        }
        if (guestNameInput) guestNameInput.value = prefilledName;
    }

    document.getElementById('guestListContainer').appendChild(guestEntryDiv);
    // setLanguage(currentLanguage); // Not strictly needed if template is translated before append
}

function removeGuestEntry(button) {
    button.closest('.guest-entry').remove();
}

function toggleChildOptions(checkbox) {
    const childOptionsDiv = checkbox.closest('.guest-entry').querySelector('.child-options');
    childOptionsDiv.classList.toggle('hidden', !checkbox.checked);
}

function validatePage2() {
    let isValid = true;
    const guestEntries = document.querySelectorAll('#guestListContainer .guest-entry');
    if (rsvpData.attending === 'yes' && guestEntries.length === 0) { // Should not happen if first guest is auto-added
        alert(translations[currentLanguage].page2Description); 
        isValid = false;
    }
    guestEntries.forEach((entry, index) => {
        const nameInput = entry.querySelector('input[name="guestName"]');
        if (!nameInput.value.trim()) {
            alert(`${translations[currentLanguage].validationRequired} (${translations[currentLanguage].guestNameLabel} - ${translations[currentLanguage].guestEntryTitle} ${index + 1})`);
            nameInput.focus();
            isValid = false;
        }
    });
    return isValid;
}

function validateAndGoToPage3() {
    if (!validatePage2()) return;
    rsvpData.guests = [];
    document.querySelectorAll('#guestListContainer .guest-entry').forEach(entry => {
        const guest = {
            name: entry.querySelector('input[name="guestName"]').value.trim(),
            isChild: entry.querySelector('input[name="isChild"]').checked,
            childSeat: entry.querySelector('input[name="childSeat"]').checked,
            childMeal: entry.querySelector('input[name="childMeal"]').checked,
            mealPreference: entry.querySelector('select[name="mealPreference"]').value,
            allergies: entry.querySelector('textarea[name="allergies"]').value.trim()
        };
        rsvpData.guests.push(guest);
    });
    showPage('page3');
}

// --- PAGE 3 LOGIC (CONTACT PREFERENCES) ---
function toggleContactInput(method) {
    const inputField = document.getElementById(`contact${method.charAt(0).toUpperCase() + method.slice(1)}Input`);
    const checkbox = document.querySelector(`input[name="contactMethod"][value="${method}"]`);
    if (inputField) {
        inputField.classList.toggle('hidden', !checkbox.checked);
        if (checkbox.checked) {
            inputField.required = true; // Mark as required for form validation if using HTML5
            inputField.focus();
        } else {
            inputField.required = false;
            inputField.value = ''; 
        }
    }
}

function validatePage3() {
    let isValid = true;
    const contactMethodsChecked = document.querySelectorAll('input[name="contactMethod"]:checked');
    
    if (contactMethodsChecked.length === 0) {
        alert(translations[currentLanguage].validationMinOneContact);
        return false; // At least one method must be selected
    }

    contactMethodsChecked.forEach(checkbox => {
        const inputField = document.getElementById(`contact${checkbox.value.charAt(0).toUpperCase() + checkbox.value.slice(1)}Input`);
        if (!inputField || !inputField.value.trim()) {
            // Use the translated label for the alert
            const labelSpan = checkbox.parentElement.querySelector('span[data-translate]');
            const contactMethodName = labelSpan ? labelSpan.textContent : checkbox.value;
            alert(`${translations[currentLanguage].validationContactMethod} (${contactMethodName})`);
            if (inputField) inputField.focus();
            isValid = false;
        }
    });
    return isValid;
}

function validateAndGoToFinalPage() {
    if (!validatePage3()) return;
    rsvpData.contactPreferences = [];
    document.querySelectorAll('input[name="contactMethod"]:checked').forEach(checkbox => {
        const method = checkbox.value;
        const inputField = document.getElementById(`contact${method.charAt(0).toUpperCase() + method.slice(1)}Input`);
        rsvpData.contactPreferences.push({
            method: method,
            detail: inputField.value.trim()
        });
    });
    document.getElementById('finalPageContent').classList.remove('hidden');
    document.getElementById('thankYouMessage').classList.add('hidden');
    document.getElementById('backToStartButton').classList.add('hidden');
    showPage('finalPage');
}

// --- FINAL PAGE & SUBMISSION ---
function submitForm() {
    rsvpData.message = document.getElementById('message').value.trim();
    const emailStatusDiv = document.getElementById('emailStatus');

    emailStatusDiv.textContent = translations[currentLanguage].emailSending;
    emailStatusDiv.className = 'email-status-message email-sending'; 

    let guestListSummary = "";
    if (rsvpData.attending === 'yes' && rsvpData.guests.length > 0) {
        guestListSummary = "Attending Guests:\n";
        rsvpData.guests.forEach(guest => {
            guestListSummary += `- ${guest.name}`;
            if (guest.isChild) {
                guestListSummary += " (Child";
                if (guest.childSeat) guestListSummary += ", Needs Seat";
                if (guest.childMeal) guestListSummary += ", Needs Child Meal";
                guestListSummary += ")";
            }
            guestListSummary += `\n  Meal: ${guest.mealPreference}`;
            if (guest.allergies) guestListSummary += `\n  Allergies: ${guest.allergies}`;
            guestListSummary += "\n\n";
        });
    } else if (rsvpData.attending === 'no') {
        guestListSummary = "Not attending.";
    }

    let contactPrefSummary = "Contact Preferences:\n";
    if (rsvpData.contactPreferences && rsvpData.contactPreferences.length > 0) {
        rsvpData.contactPreferences.forEach(pref => {
            contactPrefSummary += `- ${pref.method}: ${pref.detail}\n`;
        });
    } else {
        // This case should not be reached if validationMinOneContact works
        contactPrefSummary = "No specific contact preferences selected beyond primary email.\n";
    }

    const templateParamsCouple = {
        guest_side: rsvpData.guestSide === 'groom' ? translations.en.guestSideGroom : translations.en.guestSideBride, 
        chinese_name: rsvpData.chineseName || "N/A",
        english_name: rsvpData.englishName || "N/A",
        user_email: rsvpData.email,
        attending: rsvpData.attending === 'yes' ? "Yes" : "No",
        guest_details: guestListSummary,
        contact_preferences: contactPrefSummary,
        message_to_couple: rsvpData.message || "No message.",
        submission_time: new Date().toLocaleString()
    };

    const templateParamsGuest = {
        to_name: rsvpData.englishName || rsvpData.chineseName, 
        user_email: rsvpData.email,
        attending_status: rsvpData.attending === 'yes' ? "We're delighted you'll be joining us!" : "We're sorry you can't make it, but thank you for letting us know.",
        wedding_date: "[Your Wedding Date Here]", 
        wedding_location: "[Your Wedding Location Here]" 
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID_FOR_COUPLE', templateParamsCouple)
        .then((response) => {
            console.log('SUCCESS sending email to couple!', response.status, response.text);
            return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID_FOR_GUEST', templateParamsGuest);
        })
        .then((response) => {
            console.log('SUCCESS sending confirmation to guest!', response.status, response.text);
            emailStatusDiv.textContent = translations[currentLanguage].emailSuccess;
            emailStatusDiv.className = 'email-status-message email-success';
            document.getElementById('finalPageContent').classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
            document.getElementById('backToStartButton').classList.remove('hidden');

            const thankYouBody = document.querySelector('#thankYouMessage .award-text');
            if(rsvpData.attending === 'yes') {
                thankYouBody.dataset.translate = "thankYouBodyAttending";
                thankYouBody.innerHTML = translations[currentLanguage].thankYouBodyAttending;
            } else {
                thankYouBody.dataset.translate = "thankYouBodyNotAttending";
                thankYouBody.innerHTML = translations[currentLanguage].thankYouBodyNotAttending;
            }

        })
        .catch((error) => {
            console.error('FAILED to send email...', error);
            emailStatusDiv.textContent = translations[currentLanguage].emailError + (error.text ? " (" + error.text + ")" : "");
            emailStatusDiv.className = 'email-status-message email-error';
        });
}

function resetFormAndGoToStart() {
    // Simple form reset for inputs within the rsvp-container
    const rsvpContainer = document.querySelector('.rsvp-container'); // Or specific form ID if you wrap pages in <form>
    rsvpContainer.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => input.value = '');
    rsvpContainer.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => input.checked = false); // HTML radio buttons don't really reset this way
    rsvpContainer.querySelectorAll('select').forEach(select => select.selectedIndex = 0);
    
    // Clear custom selected states for choice buttons
    document.querySelectorAll('.choice-button.selected').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('guestSide').value = ''; // Clear hidden input
    document.getElementById('attendance').value = ''; // Clear hidden input

    // Clear dynamically added guests
    document.getElementById('guestListContainer').innerHTML = ''; 
    guestIdCounter = 0; // Reset guest counter

    // Hide contact input fields
    document.querySelectorAll('.contact-input').forEach(input => input.classList.add('hidden'));
    
    // Reset stars on page 1
    document.getElementById('chineseNameStar').classList.add('hidden');
    document.getElementById('englishNameStar').classList.add('hidden');


    // Reset RSVP data object
    Object.keys(rsvpData).forEach(key => {
        if (Array.isArray(rsvpData[key])) {
            rsvpData[key] = [];
        } else if (typeof rsvpData[key] === 'object' && rsvpData[key] !== null) {
            rsvpData[key] = {};
        }
         else {
            delete rsvpData[key]; // Or set to null/undefined
        }
    });
    rsvpData.guests = []; // Ensure guests array is reset

    document.getElementById('finalPageContent').classList.remove('hidden'); 
    document.getElementById('thankYouMessage').classList.add('hidden');
    document.getElementById('backToStartButton').classList.add('hidden');
    document.getElementById('emailStatus').textContent = ''; 
    document.getElementById('emailStatus').className = 'email-status-message';


    setLanguage(currentLanguage); 
    showPage('page1');
}
