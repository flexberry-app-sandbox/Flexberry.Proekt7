﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Место уч.
    /// </summary>
    // *** Start programmer edit section *** (МестоУч CustomAttributes)

    // *** End programmer edit section *** (МестоУч CustomAttributes)
    [AutoAltered()]
    [Caption("Место уч")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МестоУчE", new string[] {
            "СправСотр as \'Фио сотрудника\'",
            "СправСотр.Фио as \'Фио сотрудника\'",
            "СправСотр.СправДолж.Должность as \'Должность\'"})]
    [AssociatedDetailViewAttribute("МестоУчE", "ТчМестоУч", "ТчМестоУчE", true, "", "Ученики класса", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("МестоУчE", "СправСотр", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио сотрудника")]
    [View("МестоУчL", new string[] {
            "СправСотр.Фио as \'Фио сотрудника\'",
            "СправСотр.СправДолж.Должность as \'Должность\'"})]
    public class МестоУч : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Proekt.СправСотр fСправСотр;
        
        private IIS.Proekt.DetailArrayOfТчМестоУч fТчМестоУч;
        
        // *** Start programmer edit section *** (МестоУч CustomMembers)

        // *** End programmer edit section *** (МестоУч CustomMembers)

        
        /// <summary>
        /// Место уч.
        /// </summary>
        // *** Start programmer edit section *** (МестоУч.СправСотр CustomAttributes)

        // *** End programmer edit section *** (МестоУч.СправСотр CustomAttributes)
        [PropertyStorage(new string[] {
                "СправСотр"})]
        [NotNull()]
        public virtual IIS.Proekt.СправСотр СправСотр
        {
            get
            {
                // *** Start programmer edit section *** (МестоУч.СправСотр Get start)

                // *** End programmer edit section *** (МестоУч.СправСотр Get start)
                IIS.Proekt.СправСотр result = this.fСправСотр;
                // *** Start programmer edit section *** (МестоУч.СправСотр Get end)

                // *** End programmer edit section *** (МестоУч.СправСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МестоУч.СправСотр Set start)

                // *** End programmer edit section *** (МестоУч.СправСотр Set start)
                this.fСправСотр = value;
                // *** Start programmer edit section *** (МестоУч.СправСотр Set end)

                // *** End programmer edit section *** (МестоУч.СправСотр Set end)
            }
        }
        
        /// <summary>
        /// Место уч.
        /// </summary>
        // *** Start programmer edit section *** (МестоУч.ТчМестоУч CustomAttributes)

        // *** End programmer edit section *** (МестоУч.ТчМестоУч CustomAttributes)
        public virtual IIS.Proekt.DetailArrayOfТчМестоУч ТчМестоУч
        {
            get
            {
                // *** Start programmer edit section *** (МестоУч.ТчМестоУч Get start)

                // *** End programmer edit section *** (МестоУч.ТчМестоУч Get start)
                if ((this.fТчМестоУч == null))
                {
                    this.fТчМестоУч = new IIS.Proekt.DetailArrayOfТчМестоУч(this);
                }
                IIS.Proekt.DetailArrayOfТчМестоУч result = this.fТчМестоУч;
                // *** Start programmer edit section *** (МестоУч.ТчМестоУч Get end)

                // *** End programmer edit section *** (МестоУч.ТчМестоУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (МестоУч.ТчМестоУч Set start)

                // *** End programmer edit section *** (МестоУч.ТчМестоУч Set start)
                this.fТчМестоУч = value;
                // *** Start programmer edit section *** (МестоУч.ТчМестоУч Set end)

                // *** End programmer edit section *** (МестоУч.ТчМестоУч Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МестоУчE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоУчE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоУчE", typeof(IIS.Proekt.МестоУч));
                }
            }
            
            /// <summary>
            /// "МестоУчL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МестоУчL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МестоУчL", typeof(IIS.Proekt.МестоУч));
                }
            }
        }
    }
}
