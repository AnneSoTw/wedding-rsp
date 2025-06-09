const translations = {
            en: {
                headerTitle: "Our Wedding1",
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
                modalOkButton: "<span class='lang-en'>OK</span><span class='lang-zh'>好的</span>", // Combined for modal
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
                removeGuestButtonText: "Remove", 
                page3Title: "Details for Invitation",
                shippingTitle: "Shipping Information",
                invitationCountLabel: "How many invitations do you need?",
                selectOptionDefault: "-- Please Select --",
                addressStreetLabel: "Street Address",
                addressCodeLabel: "Postal Code",
                addressCityLabel: "City",
                addressCountryLabel: "Country",
                contactTitle: "Contact Preferences",
                contactDescription: "How do you prefer we contact you for updates? (At least one required)",
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
                validationGuestNameRequired: "Guest name is required.",
		validationInvitationCount: "Please select the number of invitations needed.",
                validationAddress: "Please complete all address fields.",
                validationContactMethod: "Please provide details for the selected contact method",
                validationMinOneContact: "Please select and provide details for at least one contact method.", 
                backToStart: "Back to Start"
            },
            zh: { // Note: modalOkButton combines both languages. CSS will hide one.
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
                modalOkButton: "<span class='lang-en'>OK</span><span class='lang-zh'>好的</span>", // Combined for modal
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
                removeGuestButtonText: "移除此位", 
                page3Title: "喜帖資訊",
                shippingTitle: "寄送資訊",
                invitationCountLabel: "您需要幾份喜帖？",
                selectOptionDefault: "-- 請選擇 --",
                addressStreetLabel: "街道地址",
                addressCodeLabel: "郵遞區號",
                addressCityLabel: "城市",
                addressCountryLabel: "國家",
                contactTitle: "聯絡偏好",
                contactDescription: "我們應如何與您聯絡後續事宜？（至少需擇一並填寫資料）",
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
                validationGuestNameRequired: "賓客姓名為必填。",
		validationInvitationCount: "請選擇所需喜帖數量。",
                validationAddress: "請填寫完整的地址資訊。",
                validationContactMethod: "請為已選的聯絡方式提供詳細資料",
                validationMinOneContact: "請至少選擇並填寫一種聯絡方式。",
                backToStart: "返回首頁"
            },
            fr: {
                headerTitle: "Notre Mariage",
                headerDescription: "Joignez nous pour celebrer notre mariage. Repondez avant le.",
                page1Title: "Information Invitee",
                guestSideLabel: "Vous etes un invite du:",
                guestSideGroom: "Marie",
                guestSideBride: "Mariee",
                chineseNameLabel: "Nom Chinois:",
                chineseNameHelper: "Requis si vous etes un invite du marie.",
                englishNameLabel: "Nom Francais:",
                englishNameHelper: "Requis si vous etes un invite de la marie.",
                emailLabel: "Email:",
                attendanceLabel: "Pouvez vous venir?",
                attendanceYes: "Oui, je viendrais",
                attendanceNo: "Desole, je ne viendrais pas",
                nextButton: "Suivant",
                prevButton: "Precedant",
                modalOkButton: "<span class='lang-en lang-fr'>OK</span><span class='lang-zh'>好的</span>", // Combined for modal
                page2Title: "Liste invites",
                page2Description: "Ajoutez la liste de tout les invites venant avec vous (inclus vous memes).",
                addGuestButton: "Ajouter Inivite",
                guestEntryTitle: "Inivite",
                guestNameLabel: "Nom:",
                isChildLabel: "Est-ce un enfant?",
                childSeatLabel: "Besoin d'un siege pour enfant?",
                childMealLabel: "Besoin d'un menu pour enfant?",
                mealPreferenceLabel: "Repas:",
                mealStandard: "Standard",
                mealVegetarian: "Vegetarian",
                mealVegan: "Vegan (全素)",
                mealOther: "Other (其他 - please specify)",
                allergiesLabel: "D'autre restriction ou allergies?:",
                allergiesPlaceholder: "e.g., nuts, gluten-free...",
                removeGuestButtonText: "Effacer", 
                page3Title: "Details for Invitation",
                shippingTitle: "Shipping Information",
                invitationCountLabel: "How many invitations do you need?",
                selectOptionDefault: "-- Please Select --",
                addressStreetLabel: "Street Address",
                addressCodeLabel: "Postal Code",
                addressCityLabel: "City",
                addressCountryLabel: "Country",
                contactTitle: "Contact Preferences",
                contactDescription: "How do you prefer we contact you for updates? (At least one required)",
                contactPhone: "Telephone",
                contactPhonePlaceholder: "Enter phone number",
                contactEmail: "Email",
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
                validationGuestNameRequired: "Guest name is required.",
		validationInvitationCount: "Please select the number of invitations needed.",
                validationAddress: "Please complete all address fields.",
                validationContactMethod: "Please provide details for the selected contact method",
                validationMinOneContact: "Please select and provide details for at least one contact method.", 
                backToStart: "Back to Start"
            }
        };

        // --- EmailJS Configuration ---
        const EMAILJS_SERVICE_ID = 'service_3qozdwc';
        const EMAILJS_TEMPLATE_ID = 'template_67lig9l';
        const EMAILJS_PUBLIC_KEY = 'cDxOmMxePGWSWrLPG';

	const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySyRmu4wS_XxbDFO0gLw4REs82nfAHsDO6cP_wqTi07ZRZMhRW1NY1XnUiEwJm5q540Q/exec'

        let currentLanguage = 'en';
        let currentPage = 'page1';
        const rsvpData = {
            guests: []
        };
        let focusedElementOnError = null; 

        let validationModalOverlay, validationModalMessage, validationModalCloseButton;

        function initializeModal() {
            validationModalOverlay = document.getElementById('validationModalOverlay');
            validationModalMessage = document.getElementById('validationModalMessage');
            validationModalCloseButton = document.getElementById('validationModalCloseButton');

            if (validationModalCloseButton) {
                validationModalCloseButton.addEventListener('click', hideValidationModal);
            }
        }

        function showValidationModal(message, elementToFocus = null) {
            focusedElementOnError = elementToFocus; // Store element to focus after modal closes
            if (validationModalMessage && validationModalOverlay && validationModalCloseButton) {
                validationModalMessage.textContent = message;
                
                // Update OK button text using combined translations and CSS for language switching
                const okButtonTextKey = 'modalOkButton';
                if (translations[currentLanguage] && translations[currentLanguage][okButtonTextKey]) {
                    validationModalCloseButton.innerHTML = translations[currentLanguage][okButtonTextKey];
                    // CSS will handle which span (.lang-en or .lang-zh) is displayed
                    // based on a class on the body or html element, or by default.
                    // For simplicity, we assume CSS for .lang-en and .lang-zh within the button works.
                } else {
                     validationModalCloseButton.textContent = "OK"; // Fallback
                }
                validationModalOverlay.classList.remove('hidden');
                validationModalOverlay.classList.add('show');
            } else {
                console.error("Modal elements not found. Falling back to alert for message:", message);
                alert(message); 
            }
        }

        function hideValidationModal() {
            if (validationModalOverlay) {
                validationModalOverlay.classList.remove('show');
            }
            if (focusedElementOnError) {
                focusedElementOnError.focus();
                focusedElementOnError = null; 
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            initializeModal(); 

            try {
                emailjs.init(EMAILJS_PUBLIC_KEY); 
            } catch (e) {
                console.error("EmailJS initialization failed.", e);
            }

            setLanguage(currentLanguage); 
            showPage(currentPage);      

            document.getElementById('langEn').addEventListener('click', () => setLanguage('en'));
            document.getElementById('langZh').addEventListener('click', () => setLanguage('zh'));
            document.getElementById('langFr').addEventListener('click', () => setLanguage('fr'));

            document.querySelectorAll('.choice-button[name="guestSide"]').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.querySelectorAll('.choice-button[name="guestSide"]').forEach(btn => btn.classList.remove('selected'));
                    e.currentTarget.classList.add('selected');
                    const side = e.currentTarget.dataset.value;
                    document.getElementById('guestSide').value = side;
                    updateNameRequirementVisuals(side); 
                });
            });

            document.querySelectorAll('.choice-button[name="attendance"]').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('.choice-button[name="attendance"]').forEach(btn => btn.classList.remove('selected'));
                    e.currentTarget.classList.add('selected');
                    document.getElementById('attendance').value = e.currentTarget.dataset.value;
                });
            });
            
            document.getElementById('nextPage1').addEventListener('click', validateAndGoToPage2);
            document.getElementById('addGuestBtn').addEventListener('click', () => addGuestEntry(false));
            document.getElementById('prevToPage1').addEventListener('click', () => showPage('page1'));
            document.getElementById('nextPage2').addEventListener('click', validateAndGoToPage3);

            document.querySelectorAll('input[name="contactMethod"]').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => toggleContactInput(e.target.value, e.target.checked));
            });
            document.getElementById('prevToPage2').addEventListener('click', () => showPage('page2'));
            document.getElementById('nextPage3').addEventListener('click', validateAndGoToFinalPage);
            
            document.getElementById('submitRsvp').addEventListener('click', submitForm);
        });

        function setLanguage(lang) {
            currentLanguage = lang;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                if (translations[lang] && translations[lang][key]) {
                    // For modal button, which has HTML content for bilingual text
                    if (el.id === 'validationModalCloseButton') {
                         el.innerHTML = translations[lang][key]; // This has the spans
                    } else {
                        el.textContent = translations[lang][key]; // Use textContent for most elements
                    }
                }
            });

            document.querySelectorAll('[placeholder-translate]').forEach(el => {
                const key = el.placeholderTranslate;
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            document.getElementById('langEn').classList.toggle('active', lang === 'en');
            document.getElementById('langZh').classList.toggle('active', lang === 'zh');
            document.getElementById('langFr').classList.toggle('active', lang === 'fr');

            const guestSideValue = document.getElementById('guestSide').value;
            updateNameRequirementVisuals(guestSideValue); 
            
            // Style bilingual spans within buttons/elements based on current language
            document.querySelectorAll('.lang-en, .lang-zh, .lang-fr').forEach(span => {
                if (span.classList.contains(`lang-${currentLanguage}`)) {
                    span.style.display = 'block';
                } else {
                    span.style.display = 'none';
                }
            });
            // Special handling for modal button if its text structure differs
             if (validationModalCloseButton) { // Ensure modal button exists
                const currentModalOkText = translations[currentLanguage]?.modalOkButton || "OK";
                validationModalCloseButton.innerHTML = currentModalOkText; // Set its HTML content
                // The CSS for .modal-button-confirm .lang-en / .lang-zh should now apply
            }
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

        function updateNameRequirementVisuals(side) {
            const chineseNameInput = document.getElementById('chineseName');
            const englishNameInput = document.getElementById('englishName');
            const chineseNameStar = document.getElementById('chineseNameStar');
            const englishNameStar = document.getElementById('englishNameStar');
            const chineseNameHelper = document.getElementById('chineseNameHelper');
            const englishNameHelper = document.getElementById('englishNameHelper');

            if (!chineseNameStar || !englishNameStar || !chineseNameHelper || !englishNameHelper || !chineseNameInput || !englishNameInput) {
                return; 
            }

            // Reset everything first
            chineseNameStar.classList.add('hidden');
            englishNameStar.classList.add('hidden');
            chineseNameHelper.classList.add('hidden');
            englishNameHelper.classList.add('hidden');
            chineseNameHelper.style.fontWeight = 'normal';
            englishNameHelper.style.fontWeight = 'normal';
            chineseNameInput.removeAttribute('required');
            englishNameInput.removeAttribute('required');


            if (side === 'groom') {
                chineseNameStar.classList.remove('hidden');
                chineseNameHelper.classList.remove('hidden'); 
                chineseNameHelper.style.fontWeight = 'bold';
                chineseNameInput.setAttribute('required', 'true');
            } else if (side === 'bride') {
                englishNameStar.classList.remove('hidden');
                englishNameHelper.classList.remove('hidden'); 
                englishNameHelper.style.fontWeight = 'bold';
                englishNameInput.setAttribute('required', 'true');
            }
            
            if (translations[currentLanguage]) {
                 chineseNameHelper.textContent = translations[currentLanguage].chineseNameHelper || "";
                 englishNameHelper.textContent = translations[currentLanguage].englishNameHelper || "";
            }
        }

        function validatePage1() {
            const guestSide = document.getElementById('guestSide').value;
            const chineseNameInput = document.getElementById('chineseName');
            const englishNameInput = document.getElementById('englishName');
            const emailInput = document.getElementById('email');
            const attendance = document.getElementById('attendance').value;

            if (!guestSide) {
                showValidationModal(translations[currentLanguage].validationGuestSide);
                return false;
            }
            if (guestSide === 'groom' && !chineseNameInput.value.trim()) {
                showValidationModal(translations[currentLanguage].validationChineseNameRequired, chineseNameInput);
                return false;
            }
            if (guestSide === 'bride' && !englishNameInput.value.trim()) {
                showValidationModal(translations[currentLanguage].validationEnglishNameRequired, englishNameInput);
                return false;
            }
            if (!emailInput.value.trim() || !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
                showValidationModal(translations[currentLanguage].validationEmail, emailInput);
                return false;
            }
            if (!attendance) {
                showValidationModal(translations[currentLanguage].validationAttendance);
                return false;
            }
            return true;
        }

        function validateAndGoToPage2() {
            if (!validatePage1()) return;

            rsvpData.guestSide = document.getElementById('guestSide').value;
            rsvpData.chineseName = document.getElementById('chineseName').value.trim();
            rsvpData.englishName = document.getElementById('englishName').value.trim();
            rsvpData.email = document.getElementById('email').value.trim();
            rsvpData.attending = document.getElementById('attendance').value;

            if (rsvpData.attending === 'yes') {
                if (document.getElementById('guestListContainer').childElementCount === 0) {
                    addGuestEntry(true); 
                }
                showPage('page2');
            } else {
                showFinalPageForNoAttending();
            }
        }
        
        function showFinalPageForNoAttending() {
            document.getElementById('finalPageContent').classList.remove('hidden');
            document.getElementById('thankYouMessage').classList.add('hidden');
            showPage('finalPage');
        }

        let guestIdCounter = 0; 
        function addGuestEntry(isFirstGuest = false) {
            guestIdCounter++;
            const template = document.getElementById('guestEntryTemplate');
            if (!template) { return; }

            const clone = template.content.cloneNode(true);
            const guestEntryDiv = clone.querySelector('.guest-entry');
            const removeButton = guestEntryDiv.querySelector('.remove-guest-button');
            
            if (isFirstGuest) {
                removeButton.classList.add('hidden'); 
            } else {
                removeButton.classList.remove('hidden');
                removeButton.addEventListener('click', (e) => removeGuestEntry(e.currentTarget));
            }
            
            guestEntryDiv.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    // For elements with HTML content (like those with inner spans)
                    if (el.innerHTML.includes("<span")) { 
                        el.innerHTML = translations[currentLanguage][key];
                    } else {
                        el.textContent = translations[currentLanguage][key];
                    }
                }
            });
             guestEntryDiv.querySelectorAll('[placeholder-translate]').forEach(el => {
                const key = el.placeholderTranslate;
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    el.placeholder = translations[currentLanguage][key];
                }
            });
            const isChildCheckbox = guestEntryDiv.querySelector('input[name="isChild"]');
            if(isChildCheckbox) {
                isChildCheckbox.addEventListener('change', (e) => toggleChildOptions(e.target));
            }

            if (isFirstGuest) {
                const guestNameInput = guestEntryDiv.querySelector('input[name="guestName"]');
                const mainChineseName = rsvpData.chineseName; 
                const mainEnglishName = rsvpData.englishName;
                let prefilledName = "";
                if (mainChineseName && mainEnglishName) {
                    prefilledName = currentLanguage === 'zh' ? `${mainChineseName} (${mainEnglishName})` : `${mainEnglishName} (${mainChineseName})`;
                } else {
                    prefilledName = mainChineseName || mainEnglishName || "";
                }
                if (guestNameInput) guestNameInput.value = prefilledName;
            }
            document.getElementById('guestListContainer').appendChild(guestEntryDiv);
             // Re-apply language-specific span visibility for newly added guest entry
            setLanguageSpansVisibility(guestEntryDiv);
        }

        function setLanguageSpansVisibility(container = document) {
            container.querySelectorAll('.lang-en, .lang-zh, .lang-fr').forEach(span => {
                if (span.classList.contains(`lang-${currentLanguage}`)) {
                    span.style.display = 'block'; // Or 'inline' or '' depending on original display
                } else {
                    span.style.display = 'none';
                }
            });
        }
         // Modify setLanguage to call the new span visibility function
        function setLanguage(lang) {
            currentLanguage = lang;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                if (translations[lang] && translations[lang][key]) {
                     el.innerHTML = translations[lang][key]; // Use innerHTML for all to support spans
                }
            });
            document.querySelectorAll('[placeholder-translate]').forEach(el => {
                const key = el.placeholderTranslate;
                if (translations[lang] && translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            document.getElementById('langEn').classList.toggle('active', lang === 'en');
            document.getElementById('langZh').classList.toggle('active', lang === 'zh');
            document.getElementById('langFr').classList.toggle('active', lang === 'fr');

            const guestSideValue = document.getElementById('guestSide').value;
            updateNameRequirementVisuals(guestSideValue); 
            
            setLanguageSpansVisibility(); // Update all lang spans in the document
        }


        function removeGuestEntry(button) {
            button.closest('.guest-entry').remove();
        }

        function toggleChildOptions(checkbox) {
            const guestEntry = checkbox.closest('.guest-entry');
            if (guestEntry) {
                const childOptionsDiv = guestEntry.querySelector('.child-options');
                if (childOptionsDiv) {
                    childOptionsDiv.classList.toggle('hidden', !checkbox.checked);
                }
            }
        }

        function validatePage2() {
            let isValid = true;
            let firstInvalidInput = null;
            const guestEntries = document.querySelectorAll('#guestListContainer .guest-entry');
            
            if (rsvpData.attending === 'yes' && guestEntries.length === 0) {
                showValidationModal(translations[currentLanguage].page2Description); 
                return false;
            }

            for (const [index, entry] of guestEntries.entries()) {
                const nameInput = entry.querySelector('input[name="guestName"]');
                if (!nameInput || !nameInput.value.trim()) {
                    showValidationModal(`${translations[currentLanguage].validationGuestNameRequired} (Guest ${index + 1})`, nameInput);
                    if (!firstInvalidInput) firstInvalidInput = nameInput;
                    isValid = false;
                    break; 
                }
            }
            return isValid;
        }
        
        function validateAndGoToPage3() {
            if (!validatePage2()) return;
            rsvpData.guests = []; 
            document.querySelectorAll('#guestListContainer .guest-entry').forEach(entry => {
                rsvpData.guests.push({
                    name: entry.querySelector('input[name="guestName"]').value.trim(),
                    isChild: entry.querySelector('input[name="isChild"]').checked,
                    childSeat: entry.querySelector('input[name="childSeat"]').checked,
                    childMeal: entry.querySelector('input[name="childMeal"]').checked,
                    mealPreference: entry.querySelector('select[name="mealPreference"]').value,
                    allergies: entry.querySelector('textarea[name="allergies"]').value.trim()
                });
            });
            showPage('page3');
        }

        function toggleContactInput(methodValue, isChecked) {
            const inputField = document.getElementById(`contact${methodValue.charAt(0).toUpperCase() + methodValue.slice(1)}Input`);
            if (inputField) {
                inputField.classList.toggle('hidden', !isChecked);
                if (isChecked) {
                    // Avoid auto-focus here as it can be disruptive when checking multiple boxes
                } else {
                    inputField.value = ''; 
                }
            }
        }

        function validatePage3()
        {
            const invitationCount = document.getElementById('invitationCount');
            const addressStreet = document.getElementById('addressStreet');
            const addressCode = document.getElementById('addressCode');
            const addressCity = document.getElementById('addressCity');
            const addressCountry = document.getElementById('addressCountry');

            if (!invitationCount.value) {
                showValidationModal(translations[currentLanguage].validationInvitationCount, invitationCount);
                return false;
            }
            if (!addressStreet.value.trim() || !addressCode.value.trim() || !addressCity.value.trim() || !addressCountry.value.trim()) {
                showValidationModal(translations[currentLanguage].validationAddress, addressStreet);
                return false;
            }
            const contactMethodsChecked = document.querySelectorAll('input[name="contactMethod"]:checked');
            if (contactMethodsChecked.length === 0) {
                showValidationModal(translations[currentLanguage].validationMinOneContact);
                return false;
            }

            let firstInvalidInput = null;
            for (const checkbox of contactMethodsChecked) {
                const methodValue = checkbox.value;
                const inputField = document.getElementById(`contact${methodValue.charAt(0).toUpperCase() + methodValue.slice(1)}Input`);
                if (!inputField || !inputField.value.trim()) {
                    const labelSpan = checkbox.closest('.checkbox-label').querySelector('span[data-translate]');
                    const contactMethodName = labelSpan ? labelSpan.textContent.split('(')[0].trim() : methodValue;
                    showValidationModal(`${translations[currentLanguage].validationContactMethod}: ${contactMethodName}`, inputField);
                    if (!firstInvalidInput && inputField) firstInvalidInput = inputField; // Store only the first one
                    return false; 
                }
            }
            return true;
        }

        function validateAndGoToFinalPage() {
            if (!validatePage3()) return;
            rsvpData.invitationCount = document.getElementById('invitationCount').value;
            rsvpData.address = {
                street: document.getElementById('addressStreet').value.trim(),
                code: document.getElementById('addressCode').value.trim(),
                city: document.getElementById('addressCity').value.trim(),
                country: document.getElementById('addressCountry').value.trim()
            };

	    rsvpData.contactPreferences = {};
            document.querySelectorAll('input[name="contactMethod"]:checked').forEach(checkbox => {
                const method = checkbox.value;
                const inputField = document.getElementById(`contact${method.charAt(0).toUpperCase() + method.slice(1)}Input`);
                rsvpData.contactPreferences[method] = inputField.value.trim();
            });
            
            document.getElementById('finalPageContent').classList.remove('hidden');
            document.getElementById('thankYouMessage').classList.add('hidden');
            showPage('finalPage');
        }

        function submitForm()
	{
            rsvpData.message = document.getElementById('message').value.trim();
            const emailStatusDiv = document.getElementById('emailStatus');
            emailStatusDiv.textContent = translations[currentLanguage].emailSending;
            emailStatusDiv.className = 'email-status-message email-sending'; 

            let emailBody = `<div style="font-family: Arial, sans-serif; color: #333;">`;
            
            emailBody += `<h3>Basic Information:</h3><ul>`;
            emailBody += `<li><strong>Guest side:</strong> ${rsvpData.guestSide === 'groom' ? 'Groom' : 'Bride'}</li>`;
            emailBody += `<li><strong>Chinese Name:</strong> ${rsvpData.chineseName || 'N/A'}</li>`;
            emailBody += `<li><strong>English Name:</strong> ${rsvpData.englishName || 'N/A'}</li>`;
            emailBody += `<li><strong>Email:</strong> ${rsvpData.email}</li>`;
            emailBody += `<li><strong>Attend:</strong> ${rsvpData.attending === 'yes' ? 'Yes' : 'No'}</li>`;
            emailBody += `</ul>`;

            if (rsvpData.attending === 'yes' && rsvpData.guests && rsvpData.guests.length > 0) {
                emailBody += `<h3>Guest Information:</h3>`;
                emailBody += `<table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                                <thead>
                                    <tr style="background-color: #f2f2f2;">
                                        <th>Name</th>
                                        <th>Children?</th>
                                        <th>Child Seat?</th>
                                        <th>Child Meal?</th>
                                        <th>Meal Preference</th>
                                        <th>Other (Allergies)</th>
                                    </tr>
                                </thead>
                                <tbody>`;
                rsvpData.guests.forEach(guest => {
                    emailBody += `<tr>
                                    <td>${guest.name}</td>
                                    <td>${guest.isChild ? 'Yes' : 'No'}</td>
                                    <td>${guest.childSeat ? 'Yes' : 'No'}</td>
                                    <td>${guest.childMeal ? 'Yes' : 'No'}</td>
                                    <td>${guest.mealPreference}</td>
                                    <td>${guest.allergies || 'N/A'}</td>
                                  </tr>`;
                });
                emailBody += `</tbody></table>`;
            
		    emailBody += `<h3>Contact & Shipping Information:</h3><ul>`;
		    emailBody += `<li><strong>Phone:</strong> ${rsvpData.contactPreferences.phone || 'N/A'}</li>`;
		    emailBody += `<li><strong>Email Contact:</strong> ${rsvpData.contactPreferences.email || 'N/A'}</li>`;
		    emailBody += `<li><strong>Line:</strong> ${rsvpData.contactPreferences.line || 'N/A'}</li>`;
		    emailBody += `<li><strong>WhatsApp:</strong> ${rsvpData.contactPreferences.whatsapp || 'N/A'}</li>`;
		    emailBody += `<li><strong>Instagram:</strong> ${rsvpData.contactPreferences.ig || 'N/A'}</li>`;
		    emailBody += `<li><strong>Facebook:</strong> ${rsvpData.contactPreferences.facebook || 'N/A'}</li>`;
		    emailBody += `<li><strong>Number of invitation needed:</strong> ${rsvpData.invitationCount}</li>`;
		    emailBody += `<li><strong>Address:</strong> ${rsvpData.address.street}, ${rsvpData.address.city}, ${rsvpData.address.code}, ${rsvpData.address.country}</li>`;
		    emailBody += `</ul>`;
	    }
            emailBody += `<h3>Other:</h3>`;
            emailBody += `<p>${rsvpData.message || 'No message left.'}</p>`;
            
            emailBody += `</div>`;
            
   
	   const templateParamsCouple = {
                email_body: emailBody, 
                // This 'email' parameter is for the 'To' field in EmailJS.
                email: rsvpData.email,
                // This 'emailAS' is for the 'CC' field. Replace the value with your actual email.
                emailAS: "hubault.anne-so@hotmail.fr", 
                user_name: rsvpData.englishName || rsvpData.chineseName
            };


            const YOUR_SERVICE_ID = ""; 
            const YOUR_TEMPLATE_ID_FOR_COUPLE = "";

            if (YOUR_SERVICE_ID === EMAILJS_SERVICE_ID || YOUR_TEMPLATE_ID_FOR_COUPLE === EMAILJS_TEMPLATE_ID) {
                console.warn("EmailJS Service ID or Template ID not configured.");
                showValidationModal("Email sending is not configured. Please contact the host.");
                emailStatusDiv.textContent = "Email sending is not configured.";
                emailStatusDiv.className = 'email-status-message email-error';
                
                document.getElementById('finalPageContent').classList.add('hidden');
                document.getElementById('thankYouMessage').classList.remove('hidden');
                updateThankYouMessage();
                return;
            }

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParamsCouple)
                .then((response) => {
                    console.log('SUCCESS sending email to couple!', response.status, response.text);
                    emailStatusDiv.textContent = translations[currentLanguage].emailSuccess;
                    emailStatusDiv.className = 'email-status-message email-success';
                    document.getElementById('finalPageContent').classList.add('hidden');
                    document.getElementById('thankYouMessage').classList.remove('hidden');
                    updateThankYouMessage();
                })
                .catch((error) => {
                    console.error('FAILED to send email...', error);
                    showValidationModal(translations[currentLanguage].emailError + (error && error.text ? ` (${error.text})` : ""));
                    emailStatusDiv.textContent = translations[currentLanguage].emailError;
                    emailStatusDiv.className = 'email-status-message email-error';
                });

		 // --- Start of Google Sheet Data Preparation ---
		    let guestDetailsForSheet = "";
		    if (rsvpData.attending === 'yes' && rsvpData.guests && rsvpData.guests.length > 0) {
		        rsvpData.guests.forEach(guest => {
		            let details = `Name: ${guest.name}, Child: ${guest.isChild ? 'Yes' : 'No'}, Seat: ${guest.childSeat ? 'Yes' : 'No'}, Meal: ${guest.childMeal ? 'Yes' : 'No'}, Pref: ${guest.mealPreference}, Allergies: ${guest.allergies || 'N/A'}`;
		            guestDetailsForSheet += details + " | "; // Use a separator for multiple guests
		        });
		    }
		
		    const contactMethodsForSheet = Object.entries(rsvpData.contactPreferences)
		                                         .map(([key, value]) => `${key}: ${value}`)
		                                         .join(', ');
		
		    const sheetData = {
		        guestSide: rsvpData.guestSide === 'groom' ? 'Groom' : 'Bride',
		        chineseName: rsvpData.chineseName || 'N/A',
		        englishName: rsvpData.englishName || 'N/A',
		        email: rsvpData.email,
		        attending: rsvpData.attending === 'yes' ? 'Yes' : 'No',
		        invitationCount: rsvpData.invitationCount,
		        address: `${rsvpData.address.street}, ${rsvpData.address.city}, ${rsvpData.address.code}, ${rsvpData.address.country}`,
		        contactMethods: contactMethodsForSheet,
		        message: rsvpData.message || 'N/A',
		        guestDetails: guestDetailsForSheet.slice(0, -3) // Remove trailing separator
		    };

		 	const scriptURL = APPS_SCRIPT_URL; 

	            return fetch(scriptURL, {
	                method: 'POST',
	                mode: 'no-cors', 
	                headers: {
	                    'Content-Type': 'application/json',
	                },
	                body: JSON.stringify(sheetData)
	            });
		    // --- End of Google Sheet Data Preparation ---
        }
        
        function updateThankYouMessage() {
            const thankYouBody = document.querySelector('#thankYouMessage .award-text');
            if (thankYouBody) {
                if (rsvpData.attending === 'yes') {
                    thankYouBody.dataset.translate = "thankYouBodyAttending"; 
                    thankYouBody.innerHTML = translations[currentLanguage].thankYouBodyAttending;
                } else {
                    thankYouBody.dataset.translate = "thankYouBodyNotAttending";
                    thankYouBody.innerHTML = translations[currentLanguage].thankYouBodyNotAttending;
                }
                 setLanguageSpansVisibility(thankYouBody); // Ensure lang spans are correct
            }
        }

        function resetFormAndGoToStart() {
            document.querySelectorAll('.rsvp-container input[type="text"], .rsvp-container input[type="email"], .rsvp-container textarea').forEach(input => input.value = '');
            document.querySelectorAll('.rsvp-container input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
            document.querySelectorAll('.rsvp-container select').forEach(select => select.selectedIndex = 0);
            document.querySelectorAll('.choice-button.selected').forEach(btn => btn.classList.remove('selected'));
            
            const guestSideInput = document.getElementById('guestSide');
            if(guestSideInput) guestSideInput.value = '';
            const attendanceInput = document.getElementById('attendance');
            if(attendanceInput) attendanceInput.value = '';

            const guestListContainer = document.getElementById('guestListContainer');
            if(guestListContainer) guestListContainer.innerHTML = '';
            guestIdCounter = 0; 

            document.querySelectorAll('.contact-input').forEach(input => input.classList.add('hidden'));

            const cnStar = document.getElementById('chineseNameStar');
            if(cnStar) cnStar.classList.add('hidden');
            const enStar = document.getElementById('englishNameStar');
            if(enStar) enStar.classList.add('hidden');
            const cnHelper = document.getElementById('chineseNameHelper');
            if(cnHelper) cnHelper.classList.add('hidden');
            const enHelper = document.getElementById('englishNameHelper');
            if(enHelper) enHelper.classList.add('hidden');


            Object.keys(rsvpData).forEach(key => {
                if (Array.isArray(rsvpData[key])) rsvpData[key] = [];
                else if (typeof rsvpData[key] === 'object' && rsvpData[key] !== null) {
                    for (const prop in rsvpData[key]) delete rsvpData[key][prop];
                } else delete rsvpData[key];
            });
            rsvpData.guests = []; 

            const finalPageContent = document.getElementById('finalPageContent');
            if(finalPageContent) finalPageContent.classList.remove('hidden');
            const thankYouMsg = document.getElementById('thankYouMessage');
            if(thankYouMsg) thankYouMsg.classList.add('hidden');

            const emailStatus = document.getElementById('emailStatus');
            if(emailStatus) {
                emailStatus.textContent = '';
                emailStatus.className = 'email-status-message';
            }

            setLanguage(currentLanguage); 
            showPage('page1'); 
        }
