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
    /// Тч место уч.
    /// </summary>
    // *** Start programmer edit section *** (ТчМестоУч CustomAttributes)

    // *** End programmer edit section *** (ТчМестоУч CustomAttributes)
    [AutoAltered()]
    [Caption("Сведения об ученике")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТчМестоУчE", new string[] {
            "СправУч as \'Фио ученика\'",
            "СправУч.Фио as \'Фио ученика\'",
            "СправУч.КлассУч.Назв as \'Класс ученика\'",
            "СправУч.Номер.Наименование as \'Номер карты\'",
            "СправУч.СправРод.Фио as \'Фио родителя\'"})]
    [MasterViewDefineAttribute("ТчМестоУчE", "СправУч", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фио ученика")]
    public class ТчМестоУч : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Proekt.СправУч fСправУч;
        
        private IIS.Proekt.МестоУч fМестоУч;
        
        // *** Start programmer edit section *** (ТчМестоУч CustomMembers)

        // *** End programmer edit section *** (ТчМестоУч CustomMembers)

        
        /// <summary>
        /// Тч место уч.
        /// </summary>
        // *** Start programmer edit section *** (ТчМестоУч.СправУч CustomAttributes)

        // *** End programmer edit section *** (ТчМестоУч.СправУч CustomAttributes)
        [PropertyStorage(new string[] {
                "СправУч"})]
        [NotNull()]
        public virtual IIS.Proekt.СправУч СправУч
        {
            get
            {
                // *** Start programmer edit section *** (ТчМестоУч.СправУч Get start)

                // *** End programmer edit section *** (ТчМестоУч.СправУч Get start)
                IIS.Proekt.СправУч result = this.fСправУч;
                // *** Start programmer edit section *** (ТчМестоУч.СправУч Get end)

                // *** End programmer edit section *** (ТчМестоУч.СправУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчМестоУч.СправУч Set start)

                // *** End programmer edit section *** (ТчМестоУч.СправУч Set start)
                this.fСправУч = value;
                // *** Start programmer edit section *** (ТчМестоУч.СправУч Set end)

                // *** End programmer edit section *** (ТчМестоУч.СправУч Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proekt.МестоУч.
        /// </summary>
        // *** Start programmer edit section *** (ТчМестоУч.МестоУч CustomAttributes)

        // *** End programmer edit section *** (ТчМестоУч.МестоУч CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "МестоУч"})]
        public virtual IIS.Proekt.МестоУч МестоУч
        {
            get
            {
                // *** Start programmer edit section *** (ТчМестоУч.МестоУч Get start)

                // *** End programmer edit section *** (ТчМестоУч.МестоУч Get start)
                IIS.Proekt.МестоУч result = this.fМестоУч;
                // *** Start programmer edit section *** (ТчМестоУч.МестоУч Get end)

                // *** End programmer edit section *** (ТчМестоУч.МестоУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТчМестоУч.МестоУч Set start)

                // *** End programmer edit section *** (ТчМестоУч.МестоУч Set start)
                this.fМестоУч = value;
                // *** Start programmer edit section *** (ТчМестоУч.МестоУч Set end)

                // *** End programmer edit section *** (ТчМестоУч.МестоУч Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТчМестоУчE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТчМестоУчE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТчМестоУчE", typeof(IIS.Proekt.ТчМестоУч));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТчМестоУч.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТчМестоУч CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТчМестоУч CustomAttributes)
    public class DetailArrayOfТчМестоУч : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proekt.DetailArrayOfТчМестоУч members)

        // *** End programmer edit section *** (IIS.Proekt.DetailArrayOfТчМестоУч members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТчМестоУч by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТчМестоУч.
        /// </summary>
        public DetailArrayOfТчМестоУч(IIS.Proekt.МестоУч fМестоУч) : 
                base(typeof(ТчМестоУч), ((ICSSoft.STORMNET.DataObject)(fМестоУч)))
        {
        }
        
        public IIS.Proekt.ТчМестоУч this[int index]
        {
            get
            {
                return ((IIS.Proekt.ТчМестоУч)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proekt.ТчМестоУч dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
