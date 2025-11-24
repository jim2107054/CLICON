import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCog, FaBell, FaLock, FaEnvelope, FaLanguage, FaDollarSign, FaTrash } from "react-icons/fa";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";
import { useAppContext } from "../context/AppContext";

const Settings = () => {
  const navigate = useNavigate();
  const { user, logout } = useAppContext();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    smsNotifications: false,
    twoFactorAuth: false,
    language: "english",
    currency: "usd",
    theme: "light"
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting]
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle password change logic here
    alert("Password changed successfully!");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      // Handle account deletion
      logout();
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account preferences and security</p>
          </div>
          <button
            onClick={() => navigate("/my-account")}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all font-semibold"
          >
            Back to Account
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaBell className="text-2xl text-btnColor" />
                <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Notifications</h3>
                    <p className="text-sm text-gray-600">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={() => handleToggle('emailNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btnColor"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">Order Updates</h3>
                    <p className="text-sm text-gray-600">Get notified about order status</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.orderUpdates}
                      onChange={() => handleToggle('orderUpdates')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btnColor"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">Promotional Emails</h3>
                    <p className="text-sm text-gray-600">Receive offers and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.promotionalEmails}
                      onChange={() => handleToggle('promotionalEmails')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btnColor"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">SMS Notifications</h3>
                    <p className="text-sm text-gray-600">Receive text messages</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.smsNotifications}
                      onChange={() => handleToggle('smsNotifications')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btnColor"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <MdSecurity className="text-2xl text-btnColor" />
                <h2 className="text-2xl font-bold text-gray-800">Security</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-800">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.twoFactorAuth}
                      onChange={() => handleToggle('twoFactorAuth')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btnColor"></div>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-800 mb-4">Change Password</h3>
                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-btnColor to-orange-500 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg"
                  >
                    Update Password
                  </button>
                </form>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white border-2 border-red-200 rounded-xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <FaTrash className="text-2xl text-red-500" />
                <h2 className="text-2xl font-bold text-red-600">Danger Zone</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button
                onClick={handleDeleteAccount}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-all duration-300"
              >
                Delete Account
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Preferences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaCog className="text-xl text-btnColor" />
                <h3 className="text-lg font-bold text-gray-800">Preferences</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaLanguage className="inline mr-2" />
                    Language
                  </label>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({...settings, language: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                  >
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="german">German</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaDollarSign className="inline mr-2" />
                    Currency
                  </label>
                  <select
                    value={settings.currency}
                    onChange={(e) => setSettings({...settings, currency: e.target.value})}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-btnColor focus:outline-none"
                  >
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                    <option value="bdt">BDT</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/my-account")}
                  className="w-full py-2 border-2 border-gray-300 rounded-lg hover:border-btnColor hover:bg-orange-50 transition-all font-semibold text-gray-700"
                >
                  My Account
                </button>
                <button
                  onClick={() => navigate("/track-order")}
                  className="w-full py-2 border-2 border-gray-300 rounded-lg hover:border-btnColor hover:bg-orange-50 transition-all font-semibold text-gray-700"
                >
                  Track Orders
                </button>
                <button
                  onClick={() => navigate("/wish-list")}
                  className="w-full py-2 border-2 border-gray-300 rounded-lg hover:border-btnColor hover:bg-orange-50 transition-all font-semibold text-gray-700"
                >
                  Wishlist
                </button>
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
